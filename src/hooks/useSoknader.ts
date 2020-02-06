import { Beslutning } from '../types/soknadTypes';
import { useSykefravaer } from './useSykefravaer';

export const useSoknader = (sykefravaerId?: string) => {
    const { sykefravaerFraId } = useSykefravaer(sykefravaerId);

    if (!sykefravaerFraId) {
        return {
            soknader: [],
            aktiveSoknader: [],
        };
    }

    const soknader = sykefravaerFraId.soknader;
    const aktiveSoknader = sykefravaerFraId.soknader.filter(sok => sok.beslutning === Beslutning.AKTIV);

    return { soknader, aktiveSoknader };
};
