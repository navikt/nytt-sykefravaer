import useAppStore from '../store/useAppStore';
import {
    hentSykefravaerFerdigBehandlet,
    hentSykefravaerMedAktiveSoknader,
    hentSykefravaerMedNyeSykemeldingerEllerAktiveSoknader,
    hentSykefravaerMedNyeSykmeldinger,
    hentSykefravaerMedNyeVarsler,
    hentSykefravaerPagaende,
} from '../utils/sykefravaerUtils';

export const useSykefravaer = (id?: string) => {
    const { sykefravaer } = useAppStore();

    if (!sykefravaer) {
       return {
        sykefravaerNyeSykmeldinger: null,
        sykefravaerAktiveSoknader: null,
        sykefravaerPagaende: null,
        sykefravaerMedNyeSykemeldingerEllerAktiveSoknader: null,
        sykefravaerFerdigBehandlet: null,
        sykefravaerMedNyeVarsler: null,
        sykefravaerFraId: null,
    }
    }

    const sykefravaerNyeSykmeldinger = hentSykefravaerMedNyeSykmeldinger(sykefravaer);
    const sykefravaerAktiveSoknader = hentSykefravaerMedAktiveSoknader(sykefravaer);
    const sykefravaerPagaende = hentSykefravaerPagaende(sykefravaer);
    const sykefravaerMedNyeSykemeldingerEllerAktiveSoknader = hentSykefravaerMedNyeSykemeldingerEllerAktiveSoknader(
        sykefravaer,
    );
    const sykefravaerFerdigBehandlet = hentSykefravaerFerdigBehandlet(sykefravaer);
    const sykefravaerMedNyeVarsler = hentSykefravaerMedNyeVarsler(sykefravaer);
    const sykefravaerFraId = id ? sykefravaer.find(sf => sf.id === id) : null;

    return {
        sykefravaerNyeSykmeldinger,
        sykefravaerAktiveSoknader,
        sykefravaerPagaende,
        sykefravaerMedNyeSykemeldingerEllerAktiveSoknader,
        sykefravaerFerdigBehandlet,
        sykefravaerMedNyeVarsler,
        sykefravaerFraId,
    };
};
