import React from 'react';
import { Element } from 'nav-frontend-typografi';

import './UnderstreketOverskrift.less';

const UnderstreketOverskrift = ({ tittel }: { tittel: string }) => {
    return (
        <>
            <Element>{tittel}</Element>
            <hr className="understreket__hr" />
        </>
    );
};

export default UnderstreketOverskrift;
