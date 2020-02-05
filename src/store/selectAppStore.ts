import dayjs from 'dayjs';

import useAppStore from './useAppStore';
import { Periode, StatusTyper } from '../types/sykmeldingTypes';
import { RSSoknadstatus } from '../types/soknadTypes/rs-types/rs-soknadstatus';
import { Sykefravaer } from '../types/sykefravaerTypes';
import { SykmeldingData } from '../types/sykmeldingDataTypes';

// Sykefravær som inneholder nye sykmeldinger
export const useSykefravaerNyeSykmeldinger = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    return sykefravaer.filter(fravaer => hentNyeSykmeldingerFraSykefravaer(fravaer).length > 0);
};

// Sykefravær som inneholder aktive søknader
export const useSykefravaerAktiveSoknader = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    return sykefravaer.filter(fravaer => hentAktiveSoknaderFraSykefravaer(fravaer).length > 0);
};

// Sykefravær med bekreftede/sendte sykmeldinger og inaktive søknader
export const useSykefravaerPagaende = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    const harAktiveEllerFremtidigeSoknader = sykefravaer.filter(fravaer => {
        const harAktiveSoknader = hentAktiveSoknaderFraSykefravaer(fravaer).length > 0;
        const harFremtidigeSoknader = hentFremtidigeSoknaderFraSykefravaer(fravaer).length > 0;

        return harAktiveSoknader || harFremtidigeSoknader;
    });

    return harAktiveEllerFremtidigeSoknader;
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
    const fravaerNyeSykmeldinger = useSykefravaerNyeSykmeldinger();
    const fravaerAktiveSoknader = useSykefravaerAktiveSoknader();
    return fjernDuplikateSykefravaer(fravaerNyeSykmeldinger, fravaerAktiveSoknader);
};

// Sykefravær som kun har ferdig behandlede sykmeldinger og godkjente søknader
export const useSykefravaerFerdigBehandlet = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    const utenNyeSykmeldinger = sykefravaer.filter(fravaer => hentNyeSykmeldingerFraSykefravaer(fravaer).length === 0);
    const utenAktiveSoknader = utenNyeSykmeldinger.filter(
        fravaer => hentAktiveSoknaderFraSykefravaer(fravaer).length === 0,
    );
    const utenFremtidigeSoknader = utenAktiveSoknader.filter(
        fravaer => hentFremtidigeSoknaderFraSykefravaer(fravaer).length === 0,
    );

    return utenFremtidigeSoknader;
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

export const useSykmeldingerFraSykefravaer = (id?: string) => {
    const sykefravaer = useSykefravaerFraId(id);

    if (!sykefravaer) {
        return [];
    }

    return sykefravaer.sykmeldinger;
};

export const useSoknaderFraSykefravaer = (id?: string) => {
    const sykefravaer = useSykefravaerFraId(id);

    if (!sykefravaer) {
        return [];
    }

    return sykefravaer.soknader;
};

export const useNyeSykmeldingerFraSykefravaer = (id?: string) => {
    const sykmeldinger = useSykmeldingerFraSykefravaer(id);

    return sykmeldinger.filter(sykmelding => sykmelding.status.status === StatusTyper.NY);
};

export const useNyeSoknaderFraSykefravaer = (id?: string) => {
    const soknader = useSoknaderFraSykefravaer(id);

    return soknader.filter(soknader => soknader.status === RSSoknadstatus.NY);
};

export const useFremtidgeSoknaderFraSykefravaer = (id?: string) => {
    const soknader = useSoknaderFraSykefravaer(id);

    return soknader.filter(soknader => soknader.status === RSSoknadstatus.FREMTIDIG);
};

export const useFerdigBehandledeSykmeldingerFraSykefravaer = (id?: string) => {
    const sykmeldinger = useSykmeldingerFraSykefravaer(id);

    return sykmeldinger.filter(sykmelding => sykmelding.status.status !== StatusTyper.NY);
};

export const useSykmeldingFraId = (fravaerId?: string, sykmeldingId?: string) => {
    const sykefravaer = useSykefravaerFraId(fravaerId);

    if (!sykefravaer) {
        return null;
    }

    return sykefravaer.sykmeldinger.find(sykmelding => sykmelding.sykmelding.id === sykmeldingId);
};

export const useSykefravaerMedNyeVarsler = () => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
        return [];
    }

    // TODO: Gjennomgå kriteriene for hva som regnes som et "nytt varsel"
    // Hittil regnes følgende kriterier:
    const nyeVarsler = sykefravaer.filter(fravaer => {
        if (hentNyeSykmeldingerFraSykefravaer(fravaer).length > 0) {
            return true;
        }

        if (hentAktiveSoknaderFraSykefravaer(fravaer).length > 0) {
            return true;
        }

        if (hentFremtidigeSoknaderFraSykefravaer(fravaer).length > 0) {
            return true;
        }

        if (hentGodkjenteSoknaderFraSykefravaer(fravaer).length > 0) {
            return true;
        }

        return false;
    });

    return nyeVarsler;
};

const hentSykmeldingerFraSykefravaer = (fravaer: Sykefravaer) => {
    return fravaer.sykmeldinger;
};

const hentSoknaderFraSykefravaer = (fravaer: Sykefravaer) => {
    return fravaer.soknader;
};

const hentNyeSykmeldingerFraSykefravaer = (fravaer: Sykefravaer) => {
    const sykmeldinger = hentSykmeldingerFraSykefravaer(fravaer);
    return sykmeldinger.filter(sykmeldinger => sykmeldinger.status.status === StatusTyper.NY);
};

const hentAktiveSoknaderFraSykefravaer = (fravaer: Sykefravaer) => {
    const soknader = hentSoknaderFraSykefravaer(fravaer);
    return soknader.filter(soknad => soknad.status === RSSoknadstatus.NY);
};

const hentFremtidigeSoknaderFraSykefravaer = (fravaer: Sykefravaer) => {
    const soknader = hentSoknaderFraSykefravaer(fravaer);
    return soknader.filter(soknad => soknad.status === RSSoknadstatus.FREMTIDIG);
};

const hentGodkjenteSoknaderFraSykefravaer = (fravaer: Sykefravaer) => {
    // TODO: Basert på vedtak
    return [];
};

const hentNyesteSykefravaer = (fravaer: Sykefravaer[]) => {
    /*

    */

    if (fravaer.length === 0) {
        return null;
    }

    if (fravaer.length === 1) {
        return fravaer[0];
    }

    /*
    gå gjennom hvert fravær
    for hvert fravær:
    - hent seneste fom
    - lagre fravær med seneste fom
    */

    // TODO: Uferdig
    return fravaer[0];
};

export const hentForsteFomIPerioder = (perioder: Periode[]) => {
    const forstePeriode = perioder.reduce((lavesteFom: Periode | undefined, periode) => {
        if (!lavesteFom) {
            return periode;
        }

        if (dayjs(periode.fom).isBefore(lavesteFom.fom)) {
            return periode;
        }
        return lavesteFom;
    }, undefined);

    return forstePeriode?.fom;
};

export const hentSykmeldingMedEldstePeriode = (sykmeldinger: SykmeldingData[]) => {
    return sykmeldinger.reduce((laveste: SykmeldingData | undefined, curr) => {
        if (!laveste) {
            return curr;
        }

        const lavesteFom = hentForsteFomIPerioder(laveste.sykmelding.perioder);

        if (!lavesteFom) {
            return curr;
        }

        const currentFom = hentForsteFomIPerioder(curr.sykmelding.perioder);

        if (dayjs(currentFom).isBefore(lavesteFom)) {
            return curr;
        }

        return laveste;
    }, undefined);
};

export const hentSisteTomIPerioder = (perioder: Periode[]) => {
    const nyestePeriode = perioder.reduce((nyesteTom: Periode | undefined, periode) => {
        if (!nyesteTom) {
            return periode;
        }

        if (dayjs(periode.tom).isAfter(nyesteTom.tom)) {
            return periode;
        }
        return nyesteTom;
    }, undefined);

    return nyestePeriode?.tom;
};

export const hentSykmeldingMedNyestePeriode = (sykmeldinger: SykmeldingData[]) => {
    return sykmeldinger.reduce((laveste: SykmeldingData | undefined, curr) => {
        if (!laveste) {
            return curr;
        }

        const lavesteFom = hentSisteTomIPerioder(laveste.sykmelding.perioder);

        if (!lavesteFom) {
            return curr;
        }

        const currentFom = hentSisteTomIPerioder(curr.sykmelding.perioder);

        if (dayjs(currentFom).isAfter(lavesteFom)) {
            return curr;
        }

        return laveste;
    }, undefined);
};
