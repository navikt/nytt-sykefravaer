import React from 'react';
import { Link } from 'react-router-dom';

import { Element, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';

import './LenkepanelWrapper.less';
import { Periode, Arbeidsgiver } from '../../../types/sykmeldingTypes';
import dayjs from 'dayjs';

interface PeriodeMedArbeidsgiver {
    arbeidsgiver: string;
    periode: Periode;
}

interface LenkepanelProps {
    lenke: string;
    tittel: string;
    perioder: Periode[];
    arbeidsgiver: Arbeidsgiver;
    tekst: string;
    svg: string;
}

const beregnPeriodelengde = (fom: Date, tom: Date): number => dayjs(tom).diff(dayjs(fom), 'day');
const tilLesbarPeriodeMedGraderingOgArbeidsgiver = (
    periode: Periode,
    arbeidsgiver: Arbeidsgiver,
    periodelengde: number,
): string => {
    const gradering = periode.gradert && periode.gradert.grad ? periode.gradert.grad : 100;
    const arbeidsgiverNavn = arbeidsgiver.navn ? arbeidsgiver.navn : 'Ukjent selskap';

    return arbeidsgiverNavn + ' • ' + gradering.toString() + '% i ' + periodelengde + ' dager';
};

const LenkepanelWrapper = ({ lenke, tittel, perioder, arbeidsgiver, tekst, svg }: LenkepanelProps) => {
    console.log(perioder);
    
    return (
        <LenkepanelBase border href="" linkCreator={linkProps => <Link {...linkProps} to={lenke} />}>
            <div className="lenkepanelwrapper-container">
                <img src={svg} width={60} className="lenkepanelwrapper-bilde" alt="Lenkepanelillustrasjon" />
                <div className="lenkepanelwrapper-tekst">
                    <Undertittel className="lenkepanel__heading">{tittel}</Undertittel>
                    {perioder.map(periode => (
                        <Undertekst>
                            {tilLesbarPeriodeMedGraderingOgArbeidsgiver(
                                periode,
                                arbeidsgiver,
                                beregnPeriodelengde(periode.fom, periode.tom),
                            )}
                        </Undertekst>
                    ))}
                    <Element className="lenkepanel__status">{tekst}</Element>
                </div>
            </div>
        </LenkepanelBase>
    );
};

export default LenkepanelWrapper;
