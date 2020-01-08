import './Veileder.less';

import React from 'react';
import Veilederpanel from 'nav-frontend-veilederpanel';
import { Hovedknapp } from 'nav-frontend-knapper';

import Bjorn from './Bjorn.svg';

type StemningTypes = 'glad' | 'noytral';

interface VeilederProps {
    innhold: JSX.Element;
    onClick?: () => void;
    knappTekst?: string;
    stemning: StemningTypes;
}

const hentSvg = (stemning: StemningTypes) => {
    if (stemning === 'glad') {
        return Bjorn;
    }

    // TODO: Nøytral Bjorn
    if (stemning === 'noytral') {
        return Bjorn;
    }

    return Bjorn;
};

const Veileder = ({ innhold, onClick, knappTekst, stemning }: VeilederProps) => {
    const svg = hentSvg(stemning);
    return (
        <div className="veileder-container">
            <Veilederpanel kompakt fargetema="advarsel" svg={<img src={svg} alt="NAV Veileder" />}>
                {innhold}
                {onClick && (
                    <div className="veileder-knapp">
                        <Hovedknapp onClick={onClick}>{knappTekst}</Hovedknapp>
                    </div>
                )}
            </Veilederpanel>
        </div>
    );
};

export default Veileder;
