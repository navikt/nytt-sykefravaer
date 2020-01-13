import createUseContext from 'constate';
import { useState } from 'react';

const useMockAppStore = createUseContext(() => {
    const [brukerId, setBrukerId] = useState<string>('bruker1');
    return {
        brukerId,
        setBrukerId,
    };
});

export default useMockAppStore;
