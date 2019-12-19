import React from 'react';
import { Link } from 'react-router-dom';

import { Element, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';

import './LenkepanelWrapper.less';
import { Periode, Arbeidsgiver } from '../../types/sykmeldingTypes';
import dayjs from 'dayjs';

type Ikonbakgrunn = 'gul' | 'bla' | 'gra';

interface LenkepanelProps {
    lenke: string;
    tittel: string;
    tekstGra: string;
    tekstStatus?: string;
    svg: string;
    ikonStor?: boolean;
    ikonbakgrunn: Ikonbakgrunn;
}

const beregnPeriodelengde = (fom: Date, tom: Date): number => dayjs(tom).diff(dayjs(fom), 'day');
const tilLesbarPeriodeMedGraderingOgArbeidsgiver = (
    periode: Periode,
    arbeidsgiver: Arbeidsgiver,
    periodelengde: number,
): string => {
    const gradering = periode.gradert && periode.gradert.grad ? periode.gradert.grad : 100;
    const arbeidsgiverNavn = arbeidsgiver.navn ? arbeidsgiver.navn : 'Ukjent arbeidsgiver';

    return arbeidsgiverNavn + ' • ' + gradering.toString() + '% i ' + periodelengde + ' dager';
};

const LenkepanelWrapper = ({ lenke, tittel, tekstGra, tekstStatus, svg, ikonStor = false, ikonbakgrunn }: LenkepanelProps) => {
    return (
        <LenkepanelBase border href="" linkCreator={linkProps => <Link {...linkProps} to={lenke} />}>
            <div className="lenkepanelwrapper-container">
                <img
                    src={svg}
                    width={ikonStor ? 100 : 60}
                    className={`lenkepanelwrapper-ikon ikon--${ikonbakgrunn}`}
                    alt="Lenkepanelillustrasjon"
                />
                <div className="lenkepanelwrapper-tekst">
                    <Undertittel className="lenkepanel__heading">{tittel}</Undertittel>
                    <Undertekst>{tekstGra}</Undertekst>
                    <Element className="lenkepanel__status">{tekstStatus}</Element>
                </div>
            </div>
        </LenkepanelBase>
    );
};

export default LenkepanelWrapper;
