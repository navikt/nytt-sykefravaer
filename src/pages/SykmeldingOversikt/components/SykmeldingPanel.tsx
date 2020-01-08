import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';
import { tilLesbarPeriodeMedGraderingOgArbeidsgiver } from '../../../utils/periodeUtils';
interface SykmeldingPanelProps {
    lenke: string;
    sykmelding: SykmeldingData;
}

const SykmeldingPanel = ({ lenke, sykmelding }: SykmeldingPanelProps) => {
    const perioderMedGraderingOgLengdeTekst = sykmelding.sykmelding.perioder.map(periode =>
        tilLesbarPeriodeMedGraderingOgArbeidsgiver(periode, sykmelding.sykmelding.arbeidsgiver),
    );
    const statustekst = sykmelding.status.status; // TODO: bytte til 'hentStatusTekst' når alle statustekster er ferdige

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel="Sykelding"
            tekstGra={perioderMedGraderingOgLengdeTekst}
            tekstStatus={`Status: ${statustekst}`}
            svg={bjorn}
            ikonbakgrunn="gul"
        />
    );
};

export default SykmeldingPanel;
