import './Tittel.less';

import React from 'react';
import { Sidetittel, Undertittel } from 'nav-frontend-typografi';

const Tittel = ({ tittel, undertittel }: { tittel: string; undertittel?: string }) => {
    return (
        <div className="tittel-container">
            <Sidetittel className="tittel-tittel">{tittel}</Sidetittel>
            <Undertittel className="tittel-undertittel">{undertittel}</Undertittel>
        </div>
    );
};

export default Tittel;
