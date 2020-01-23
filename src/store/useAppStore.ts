import createUseContext from 'constate';
import { useState } from 'react';

import { Sykefravaer } from '../types/sykefravaerTypes';

const useAppStore = createUseContext(() => {
    const [sykefravaer, setSykefravaer] = useState<Sykefravaer[] | null>(null);

    return {
        sykefravaer,
        setSykefravaer,
    };
});

export default useAppStore;
