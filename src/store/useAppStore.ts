import createUseContext from 'constate';
import { useState } from 'react';

import { Beslutning, Soknad } from '../types/soknadTypes';
import { SykmeldingData } from '../types/sykmeldingDataTypes';

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
