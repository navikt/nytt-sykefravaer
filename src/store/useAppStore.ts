import createUseContext from 'constate';
import { useState } from 'react';
import { SykmeldingData } from '../types/sykmeldingDataTypes';
import { Soknad, Beslutning } from '../types/soknadTypes';
import { Sykefravaer } from '../types/sykefravaerTypes';

const useAppStore = createUseContext(() => {
    const [sykmeldinger, setSykmeldinger] = useState<SykmeldingData[] | null>(null);
    const [sykefravaer, setSykefravaer] = useState<Sykefravaer[] | null>(null);
    const [soknader, setSoknader] = useState<Soknad[] | null>([
        new Soknad({ id: '1', beslutning: Beslutning.GODKJENT }),
    ]);
    return {
        sykmeldinger,
        setSykmeldinger,
        sykefravaer,
        setSykefravaer,
        soknader,
        setSoknader,
    };
});

export default useAppStore;
