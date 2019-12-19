import createUseContext from 'constate';
import { useState } from 'react';
import { SykmeldingData } from '../types/sykmeldingDataTypes';
import { Soknad, Beslutning } from '../types/soknadTypes';

const useAppStore = createUseContext(() => {
    const [sykmeldinger, setSykmeldinger] = useState<SykmeldingData[] | null>(null);
    const [soknader, setSoknader] = useState<Soknad[] | null>([
        new Soknad({ id: '1', beslutning: Beslutning.GODKJENT }),
    ]);
    return {
        sykmeldinger,
        setSykmeldinger,
        soknader,
        setSoknader,
    };
});

export default useAppStore;
