import './UnderstreketOverskrift.less';

import React from 'react';
import { Undertittel } from 'nav-frontend-typografi';

const UnderstreketOverskrift = ({ tittel }: { tittel: string }) => {
    return (
        <>
            <Undertittel>{tittel}</Undertittel>
            <hr className="understreket__hr" />
        </>
    );
};

export default UnderstreketOverskrift;
