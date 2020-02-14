import './statuspanel.less';

import Lesmerpanel from 'nav-frontend-lesmerpanel';
import React from 'react';
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';

import Person from '../../../../svg/person.svg';

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

interface StatuspanelelementProps extends CircleProps {
    topptekst: string;
    bunntekst: string;
}

const Statuspanelelement = (
    { number, checked = false, topptekst, bunntekst }: StatuspanelelementProps,
    key?: number,
) => (
    <div key={key} className="statuslinje__element">
        <Circle number={number} checked={checked} />
        <div className="tekstfelt">
            <Element>{topptekst}</Element>
            <Normaltekst>{bunntekst}</Normaltekst>
        </div>
    </div>
);

export interface StatuspanelProps {
    statusElementer: StatuspanelelementProps[];
}

const Statuspanel = ({ statusElementer }: StatuspanelProps) => {
    return (
        <div className="full-width">
            <Lesmerpanel
                intro={
                    <div className="limit statuspanel">
                        {/* Placeholder */}
                        <img src={Person} width={70} className="statuspanel-ikon" alt="statuspanel-ikon" />
                        <div className="statuspanel-tittel">
                            <Undertittel>Utbetalingsstatus</Undertittel>
                            <div className="statuspanel-tittel__understrek" />
                        </div>
                        <div className="statuslinje">
                            {statusElementer.map((statuselement, index) => Statuspanelelement(statuselement, index))}
                        </div>
                    </div>
                }
                border
            >
                <div className="limit">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit ipsam aspernatur? Ducimus
                        sequi perspiciatis iusto ullam id sed accusantium quod magni doloribus provident eligendi illum
                        magnam autem, enim natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
                        amet impedit numquam dignissimos illo obcaecati adipisci aspernatur quae eaque voluptatibus
                        dolorum tempora fugit cumque nulla doloribus tempore sequi repellendus architecto.
                    </p>
                </div>
            </Lesmerpanel>
        </div>
    );
};

export default Statuspanel;
