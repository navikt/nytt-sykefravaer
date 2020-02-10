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

const Statuspanel = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <div className="limit statuslinje">
                <div className="statuslinje__element">
                    <Circle number={1} checked />
                    <div className="tekst">
                        <Normaltekst>Sykmelding sendt</Normaltekst>
                        <Normaltekst>10 nov 2019</Normaltekst>
                    </div>
                </div>
                <div className="statuslinje__element">
                    <Circle number={2} />
                    <div className="tekst">
                        <Normaltekst>Søknad om sykepenger</Normaltekst>
                        <Normaltekst>12 nov 2019</Normaltekst>
                    </div>
                </div>
                <div className="statuslinje__element">
                    <Circle number={3} />
                    <div className="tekst">
                        <Normaltekst>Svar fra nav</Normaltekst>
                        <Normaltekst>20 nov 2019</Normaltekst>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statuspanel;