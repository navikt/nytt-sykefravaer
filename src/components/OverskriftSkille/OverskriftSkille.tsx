import './OverskriftSkille.less';

import React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

interface OverskriftSkilleProps {
    tekst: string;
}

const OverskriftSkille = ({ tekst }: OverskriftSkilleProps) => {
    return (
        <div className="overskriftskille">
            <Systemtittel className="overskriftskille__tittel">{tekst}</Systemtittel>
        </div>
    );
};

export default OverskriftSkille;
