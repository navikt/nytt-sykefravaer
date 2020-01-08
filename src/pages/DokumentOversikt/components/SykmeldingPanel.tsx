import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';
import { tilLesbarPeriodeMedGraderingOgArbeidsgiver } from '../../../utils/periodeUtils';
interface SykmeldingPanelProps {
    lenke: string;
    sykmeldingData: SykmeldingData;
}

const SykmeldingPanel = ({ lenke, sykmeldingData }: SykmeldingPanelProps) => {
    const { status, sykmelding } = sykmeldingData;

    const perioderMedGraderingOgLengdeTekst = sykmelding.perioder.map(periode =>
        tilLesbarPeriodeMedGraderingOgArbeidsgiver(periode, sykmelding.arbeidsgiver),
    );
    const statustekst = status.status; // TODO: bytte til 'hentStatusTekst' når alle statustekster er ferdige

    const tittel = 'Sykmelding mottatt'; // TODO: tittel skal være basert på sykmeldingstatus. 'hentTittel'

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={tittel}
            tekstGra={perioderMedGraderingOgLengdeTekst}
            tekstStatus={`Status: ${statustekst}`}
            svg={bjorn}
            ikonbakgrunn="gul"
        />
    );
};

export default SykmeldingPanel;
