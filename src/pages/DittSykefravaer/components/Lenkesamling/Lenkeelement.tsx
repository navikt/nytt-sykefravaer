import './Lenkeelement.less';

import Lenke from 'nav-frontend-lenker';
import React from 'react';

import ExternalLink from '../../../../svg/ExternalLink';

interface LenkeElementProps {
    tekst: string;
    lenke: string;
    ekstern?: boolean;
}

const Lenkeelement = ({ tekst, lenke, ekstern }: LenkeElementProps) => {
    return (
        <div className="lenkesamling__lenkeelement">
            <Lenke className="lenkesamling__lenke" href={lenke}>
                <span>{tekst}</span>
                {ekstern && <ExternalLink className="lenkesamling__svg" />}
            </Lenke>
        </div>
    );
};

export default Lenkeelement;
