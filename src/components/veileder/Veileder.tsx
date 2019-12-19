import React from 'react';
import Veilederpanel from 'nav-frontend-veilederpanel';
import { Hovedknapp } from 'nav-frontend-knapper';

import './Veileder.less';
import Bjorn from './Bjorn.svg';

export enum StemningTypes {
    GLAD,
    NOYTRAL,
}

interface VeilederProps {
    innhold: JSX.Element;
    onClick?: () => void;
    knappTekst?: string;
    stemning: StemningTypes;
}

const hentSvg = (stemning: StemningTypes) => {
    if (stemning === StemningTypes.GLAD) {
        return Bjorn;
    }

    // TODO: Nøytral Bjorn
    if (stemning === StemningTypes.NOYTRAL) {
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
