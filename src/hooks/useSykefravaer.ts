import { useState } from 'react';

import useAppStore from '../store/useAppStore';
import {
    hentSykefravaerFerdigBehandlet,
    hentSykefravaerMedAktiveSoknader,
    hentSykefravaerMedNyeSykemeldingerEllerAktiveSoknader,
    hentSykefravaerMedNyeSykmeldinger,
    hentSykefravaerMedNyeVarsler,
    hentSykefravaerPagaende,
    sorterSykefravaer,
} from '../utils/sykefravaerUtils';

export enum Sorteringstype {
    DATO_NYEST = 'DATO_NYEST',
    DATO_ELDST = 'DATO_ELDST'
}

export const useSykefravaer = (id?: string) => {
    const { sykefravaer } = useAppStore();
    const [sorteringFerdigBehandletSykefravaer, setSorteringForFerdigBehandletSykefravaer] = useState<Sorteringstype>(
        Sorteringstype.DATO_NYEST,
    );

    if (!sykefravaer) {
        return {
            sykefravaerNyeSykmeldinger: null,
            sykefravaerAktiveSoknader: null,
            sykefravaerPagaende: null,
            sykefravaerMedNyeSykemeldingerEllerAktiveSoknader: null,
            sykefravaerFerdigBehandlet: null,
            sorteringFerdigBehandletSykefravaer,
            setSorteringForFerdigBehandletSykefravaer,
            sykefravaerMedNyeVarsler: null,
            sykefravaerFraId: null,
        };
    }

    const sykefravaerNyeSykmeldinger = hentSykefravaerMedNyeSykmeldinger(sykefravaer);
    const sykefravaerAktiveSoknader = hentSykefravaerMedAktiveSoknader(sykefravaer);
    const sykefravaerPagaende = hentSykefravaerPagaende(sykefravaer);
    const sykefravaerMedNyeSykemeldingerEllerAktiveSoknader = hentSykefravaerMedNyeSykemeldingerEllerAktiveSoknader(
        sykefravaer,
    );
    const sykefravaerFerdigBehandlet = sorterSykefravaer(
        hentSykefravaerFerdigBehandlet(sykefravaer),
        sorteringFerdigBehandletSykefravaer,
    );
    const sykefravaerMedNyeVarsler = hentSykefravaerMedNyeVarsler(sykefravaer);
    const sykefravaerFraId = id ? sykefravaer.find(sf => sf.id === id) : null;

    return {
        sykefravaerNyeSykmeldinger,
        sykefravaerAktiveSoknader,
        sykefravaerPagaende,
        sykefravaerMedNyeSykemeldingerEllerAktiveSoknader,
        sykefravaerFerdigBehandlet,
        sorteringFerdigBehandletSykefravaer,
        setSorteringForFerdigBehandletSykefravaer,
        sykefravaerMedNyeVarsler,
        sykefravaerFraId,
    };
};
