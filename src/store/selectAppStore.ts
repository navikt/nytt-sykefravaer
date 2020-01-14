import useAppStore from './useAppStore';
import { Beslutning } from '../types/soknadTypes';
import { StatusTyper } from '../types/sykmeldingTypes';
import { Sykefravaer } from '../types/sykefravaerTypes';

export const useSelectSykmeldinger = () => {
    const { sykmeldinger } = useAppStore();

    if (!sykmeldinger) {
        return { nyeSykmeldinger: null, tidligereSykmelding: null };
    }

    const nyeSykmeldinger = sykmeldinger.filter(({ status }) => status.status === StatusTyper.NY);
    const tidligereSykmeldinger = sykmeldinger.filter(({ status }) => status.status !== StatusTyper.NY);

    return { nyeSykmeldinger, tidligereSykmeldinger };
};

// Sykefravær som inneholder nye sykmeldinger
export const useSykefravaerNyeSykmeldinger = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    return sykefravaer.filter(fravaer =>
        fravaer.sykmeldinger.some(sykmelding => sykmelding.status.status === StatusTyper.NY),
    );
};

// Sykefravær som inneholder aktive søknader
export const useSykefravaerAktiveSoknader = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    return sykefravaer.filter(fravaer => fravaer.soknader.some(soknad => soknad.beslutning === Beslutning.INAKTIV));
};

// Sykefravær med bekreftede/sendte sykmeldinger og inaktive søknader
export const useSykefravaerPagaende = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    const ikkeNyeSykefravaer = sykefravaer.filter(fravaer =>
        fravaer.sykmeldinger.some(sykmelding => sykmelding.status.status !== StatusTyper.NY),
    );

    return ikkeNyeSykefravaer.filter(fravaer =>
        fravaer.soknader.some(soknad => soknad.beslutning === Beslutning.INAKTIV),
    );
};

const fjernDuplikateSykefravaer = (sykefravaer1: Sykefravaer[], sykefravaer2: Sykefravaer[]) => {
    return sykefravaer2.reduce((utenDuplikat, fravaer) => {
        if (utenDuplikat.length === 0) {
            return [fravaer];
        }

        if (utenDuplikat.findIndex(f => f.id === fravaer.id) > 0) {
            return [...utenDuplikat, fravaer];
        }

        return utenDuplikat;
    }, sykefravaer1);
};

export const useSykefravaerMedNyeSykmeldingerEllerAktiveSoknader = () => {
    return fjernDuplikateSykefravaer(useSykefravaerNyeSykmeldinger(), useSykefravaerAktiveSoknader());
};

// Sykefravær som kun har ferdig behandlede sykmeldinger og godkjente søknader
export const useSykefravaerFerdigBehandlet = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    const fravaerMedFerdigeSykmeldinger = sykefravaer.filter(fravaer =>
        fravaer.sykmeldinger.some(sykmelding => sykmelding.status.status !== StatusTyper.NY),
    );

    return fravaerMedFerdigeSykmeldinger.filter(fravaer =>
        fravaer.soknader.some(soknad => soknad.beslutning === Beslutning.GODKJENT),
    );
};

export const useSykefravaerFraId = (id?: string) => {
    const { sykefravaer } = useAppStore();

    if (!id) {
        return null;
    }

    if (!sykefravaer) {
        return null;
    }

    return sykefravaer.find(fravaer => fravaer.id === id);
};
