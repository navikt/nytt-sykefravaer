import './statuspanel.less';

import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';

interface CircleProps {
    number: number;
    checked?: boolean;
}

const Circle = ({ number, checked }: CircleProps) => {
    return (
        <div className={`circle ${checked ? 'circle--checked' : ''}`}>
            <p>{checked ? '✓' : number}</p>
        </div>
    );
};

interface Statuselement extends CircleProps {
    topptekst: string;
    bunntekst: string;
}

export interface StatuspanelProps {
    statusElementer: Statuselement[];
}

const Statuspanel = ({ statusElementer }: StatuspanelProps) => {
    return (
        <div className="full-width">
            <div className="limit statuslinje">
                {statusElementer.map(statuselement => {
                    const { number, checked = false, topptekst, bunntekst } = statuselement;
                    return (
                        <div className="statuslinje__element">
                            <Circle number={number} checked={checked} />
                            <div className="tekst">
                                <Normaltekst>{topptekst}</Normaltekst>
                                <Normaltekst>{bunntekst}</Normaltekst>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Statuspanel;
