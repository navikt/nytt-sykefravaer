import useAppStore from './useAppStore';
import { Beslutning } from '../types/soknadTypes';
import { StatusTyper } from '../types/sykmeldingTypes';

export const useSelectSykmeldinger = () => {
    const { sykmeldinger } = useAppStore();

    if (!sykmeldinger) {
        return { nyeSykmeldinger: null, tidligereSykmelding: null };
    }

    const nyeSykmeldinger = sykmeldinger.filter(({ status }) => status.status === StatusTyper.NY);
    const tidligereSykmeldinger = sykmeldinger.filter(({ status }) => status.status !== StatusTyper.NY);

    return { nyeSykmeldinger, tidligereSykmeldinger };
};

export const useSelectSykefravaerList = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return {};
    }

    // Sykefravær som inneholder:
    // - en eller flere nye sykmeldinger
    // - en eller flere aktive søknader
    const ubehandledeFravaer = sykefravaer.filter(fravaer => {
        if (fravaer.sykmeldinger.some(sykmelding => sykmelding.status.status === StatusTyper.NY)) {
            return true;
        }

        if (
            fravaer.soknader.some(
                soknad => soknad.beslutning === Beslutning.AKTIV || soknad.beslutning === Beslutning.AVVIST,
            )
        ) {
            return true;
        }

        return false;
    });

    return { sykefravaer, ubehandledeFravaer };
};

export const useSelectSykefravaer = (id?: string) => {
    const { sykefravaer } = useAppStore();

    if (!id) {
        return null;
    }

    if (!sykefravaer) {
        return null;
    }

    return sykefravaer.find(fravaer => fravaer.id === id);
};
