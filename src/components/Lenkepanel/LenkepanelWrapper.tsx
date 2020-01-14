import './LenkepanelWrapper.less';

import React from 'react';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import { Link } from 'react-router-dom';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';

type Ikonbakgrunn = 'gul' | 'bla' | 'gra';

interface LenkepanelProps {
    lenke: string;
    tittel: string;
    tekstGra?: string | string[];
    tekstStatus?: string;
    svg: string;
    ikonbakgrunn?: Ikonbakgrunn;
}

const LenkepanelWrapper = ({ lenke, tittel, tekstGra, tekstStatus, svg, ikonbakgrunn }: LenkepanelProps) => {
    return (
        <LenkepanelBase border href="" linkCreator={linkProps => <Link {...linkProps} to={lenke} />}>
            <div className="lenkepanelwrapper-container ">
                <img
                    src={svg}
                    width={60}
                    className={`lenkepanelwrapper-ikon ${ikonbakgrunn && `ikon--${ikonbakgrunn}`}`}
                    alt="Lenkepanelillustrasjon"
                />
                <div className={`lenkepanelwrapper-tekst ${!tekstStatus && 'lenkepanelwrapper-tekst--sentrer'}`}>
                    <Undertittel className="lenkepanel__heading">{tittel}</Undertittel>
                    {tekstGra instanceof Array ? (
                        tekstGra.map(tekst => <Undertekst>{tekst}</Undertekst>)
                    ) : (
                        <Undertekst>{tekstGra}</Undertekst>
                    )}
                    {tekstStatus && <Undertekst className="lenkepanel__status">{tekstStatus}</Undertekst>}
                </div>
            </div>
        </LenkepanelBase>
    );
};

export default LenkepanelWrapper;
