import React from 'react';
import { Link } from 'react-router-dom';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import './LenkepanelWrapper.less';

type Ikonbakgrunn = 'gul' | 'bla' | 'gra';

interface LenkepanelProps {
    lenke: string;
    tittel: string;
    tekstGra?: string | string[];
    tekstStatus?: string;
    svg: string;
    ikonbakgrunn: Ikonbakgrunn;
}

const LenkepanelWrapper = ({ lenke, tittel, tekstGra, tekstStatus, svg, ikonbakgrunn }: LenkepanelProps) => {
    return (
        <LenkepanelBase border href="" linkCreator={linkProps => <Link {...linkProps} to={lenke} />}>
            <div className="lenkepanelwrapper-container ">
                <img
                    src={svg}
                    width={60}
                    className={`lenkepanelwrapper-ikon ikon--${ikonbakgrunn}`}
                    alt="Lenkepanelillustrasjon"
                />
                <div className="lenkepanelwrapper-tekst">
                    <Undertittel className="lenkepanel__heading">{tittel}</Undertittel>
                    {tekstGra instanceof Array ? (
                        tekstGra.map(tekst => <Undertekst>{tekst}</Undertekst>)
                    ) : (
                        <Undertekst>{tekstGra}</Undertekst>
                    )}
                    {tekstStatus ? <Undertekst className="lenkepanel__status">{tekstStatus}</Undertekst> : null}
                </div>
            </div>
        </LenkepanelBase>
    );
};

export default LenkepanelWrapper;
