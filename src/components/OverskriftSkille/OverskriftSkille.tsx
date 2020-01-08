import './OverskriftSkille.less';

import React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

interface OverskriftSkilleProps {
    tekst: string;
}

const OverskriftSkille = ({ tekst }: OverskriftSkilleProps) => {
    return (
        <div className="overskriftskille">
            <hr className="overskriftskille__hr" />
            <Systemtittel className="overskriftskille__tittel">{tekst}</Systemtittel>
            <hr className="overskriftskille__hr" />
        </div>
    );
};

export default OverskriftSkille;
