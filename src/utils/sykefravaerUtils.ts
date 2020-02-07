import dayjs from 'dayjs';

import { Beslutning } from '../types/soknadTypes';
import { Sorteringstype } from '../hooks/useSykefravaer';
import { StatusTyper } from '../types/sykmeldingTypes';
import { Sykefravaer } from '../types/sykefravaerTypes';

export const sorterSykefravaer = (sykefravaer: Sykefravaer[], sortering: Sorteringstype): Sykefravaer[] => {
    switch (sortering) {
        case 'DATO_NYEST':
            // TODO: fiks sorteringsfunksjon
            //Avventer til fom og tom er introdusert som del av sykefravaerTypes
            return sykefravaer.sort((sf1, sf2) => {
                if (dayjs(sf1.fom).isBefore(dayjs(sf2.fom))) {
                    return -1;
                } else if (dayjs(sf1.fom).isAfter(dayjs(sf2.fom))) {
                    return 1;
                }
                return 0;
            });
        case 'DATO_ELDST':
            // TODO: fiks sorteringsfunksjon
            //Avventer til fom og tom er introdusert som del av sykefravaerTypes
            return sykefravaer.sort((sf1, sf2) => {
                if (dayjs(sf1.fom).isBefore(dayjs(sf2.fom))) {
                    return 1;
                } else if (dayjs(sf1.fom).isAfter(dayjs(sf2.fom))) {
                    return -1;
                }
                return 0;
            });
        default:
            return sykefravaer;
    }
};

const sykefravearUtenDuplikater = (sykefravaer1: Sykefravaer[], sykefravaer2: Sykefravaer[]): Sykefravaer[] => {
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

export const hentSykefravaerMedNyeSykmeldinger = (sykefravaer: Sykefravaer[]): Sykefravaer[] => {
    return sykefravaer.filter(sf => sf.sykmeldinger.some(sm => sm.status.status === StatusTyper.NY));
};

export const hentSykefravaerMedAktiveSoknader = (sykefravaer: Sykefravaer[]): Sykefravaer[] => {
    return sykefravaer.filter(sf => sf.soknader.some(sok => sok.beslutning === Beslutning.AKTIV));
};

export const hentSykefravaerPagaende = (sykefravaer: Sykefravaer[]): Sykefravaer[] => {
    const harAktiveEllerFremtidigeSoknader = sykefravaer.filter(sf =>
        sf.soknader.some(sok => sok.beslutning === Beslutning.AKTIV || sok.beslutning === Beslutning.FREMTIDIG),
    );
    return harAktiveEllerFremtidigeSoknader;
};

export const hentSykefravaerMedNyeSykemeldingerEllerAktiveSoknader = (sykefravaer: Sykefravaer[]): Sykefravaer[] => {
    const sykefravaerNyeSykmeldinger = hentSykefravaerMedNyeSykmeldinger(sykefravaer);
    const sykefravaerAktiveSoknader = hentSykefravaerMedAktiveSoknader(sykefravaer);
    return sykefravearUtenDuplikater(sykefravaerNyeSykmeldinger, sykefravaerAktiveSoknader);
};

export const hentSykefravaerFerdigBehandlet = (sykefravaer: Sykefravaer[]): Sykefravaer[] => {
    const utenNyeSykmeldinger = sykefravaer.filter(
        sf => !sf.sykmeldinger.some(sm => sm.status.status === StatusTyper.NY),
    );
    const utenAktiveEllerFremtidigeSoknader = utenNyeSykmeldinger.filter(
        sf => !sf.soknader.some(sok => sok.beslutning === Beslutning.AKTIV || sok.beslutning === Beslutning.FREMTIDIG),
    );
    return utenAktiveEllerFremtidigeSoknader;
};

export const hentSykefravaerMedNyeVarsler = (sykefravaer: Sykefravaer[]): Sykefravaer[] => {
    return sykefravaer.filter(
        sf =>
            sf.sykmeldinger.some(sm => sm.status.status === StatusTyper.NY) || // Nye sykmeldinger
            sf.soknader.some(sok => sok.beslutning === Beslutning.AKTIV) || // Nye søknader
            sf.soknader.some(sok => sok.beslutning === Beslutning.FREMTIDIG) || // Fremtidige søknader
            sf.soknader.some(sok => sok.beslutning === Beslutning.GODKJENT), // Godkjente søknader
    );
};
