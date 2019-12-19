import React from 'react';
import { Link } from 'react-router-dom';

import { Element, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';

import './LenkepanelEnArbeidsgiver.less';
import { Periode, Arbeidsgiver, Sykmelding } from '../../../types/sykmeldingTypes';
import dayjs from 'dayjs';

interface LenkepanelProps {
    lenke: string;
    tittel: string;
    sykmeldinger: Sykmelding | Sykmelding[];
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

const LenkepanelFlereArbeidsgivere = ({ lenke, tittel, sykmeldinger, tekst, svg }: LenkepanelProps) => {
    return (
        <LenkepanelBase border href="" linkCreator={linkProps => <Link {...linkProps} to={lenke} />}>
            <div className="lenkepanelwrapper-container">
                <img src={svg} width={60} className="lenkepanelwrapper-bilde" alt="Lenkepanelillustrasjon" />
                <div className="lenkepanelwrapper-tekst">
                    <Undertittel className="lenkepanel__heading">{tittel}</Undertittel>
                    {sykmeldinger instanceof Sykmelding
                        ? sykmeldinger.perioder.map(periode => (
                              <Undertekst>
                                  {tilLesbarPeriodeMedGraderingOgArbeidsgiver(
                                      periode,
                                      sykmeldinger.arbeidsgiver,
                                      beregnPeriodelengde(periode.fom, periode.tom),
                                  )}
                              </Undertekst>
                          ))
                        : sykmeldinger.map(sykmelding =>
                              sykmelding.perioder.map(periode => (
                                  <Undertekst>
                                      {tilLesbarPeriodeMedGraderingOgArbeidsgiver(
                                          periode,
                                          sykmelding.arbeidsgiver,
                                          beregnPeriodelengde(periode.fom, periode.tom),
                                      )}
                                  </Undertekst>
                              )),
                          )}

                    {}
                    <Element className="lenkepanel__status">{tekst}</Element>
                </div>
            </div>
        </LenkepanelBase>
    );
};

export default LenkepanelFlereArbeidsgivere;
