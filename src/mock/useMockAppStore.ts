import createUseContext from 'constate';
import { useState } from 'react';

const useMockAppStore = createUseContext(() => {
    const [brukerId, setBrukerId] = useState<string>('bruker3');
    return {
        brukerId,
        setBrukerId,
    };
});

export default useMockAppStore;
