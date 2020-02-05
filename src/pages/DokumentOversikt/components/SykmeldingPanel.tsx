import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Arbeidsgiver, Status, StatusTyper } from '../../../types/sykmeldingTypes';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';
import { tilLesbarDato } from '../../FravaersOversikt/components/panelUtils';
import { tilLesbarPeriodeMedGraderingOgArbeidsgiver } from '../../../utils/periodeUtils';

interface SykmeldingPanelProps {
    lenke: string;
    ekstern?: boolean;
    sykmeldingData: SykmeldingData;
}

const hentStatusTekst = (statusData: Status, arbeidsgiver: Arbeidsgiver) => {
    const { status } = statusData;

    if (status === StatusTyper.NY) {
        return 'Klikk for å sende sykmelding nå';
    }

    if (status === StatusTyper.BEKREFTET) {
        // TODO: Hent dato fra sykmelding
        return `Sykmelding ble bekreftet og sendt til ${arbeidsgiver.navn || 'arbeidsgiver'} ${tilLesbarDato(
            new Date(),
        )}`;
    }

    if (status === StatusTyper.SENDT) {
        // TODO: Hent dato fra sykmelding
        return `Sykmelding ble sendt til NAV ${tilLesbarDato(new Date())}`;
    }

    if (status === StatusTyper.AVVIST) {
        // TODO: Hent dato fra sykmelding
        return `Sykmelding ble avvist ${tilLesbarDato(new Date())}`;
    }

    if (status === StatusTyper.AVBRUTT) {
        // TODO: Hent dato fra sykmelding
        return `Sykmelding ble avbrutt av deg ${tilLesbarDato(new Date())}`;
    }
};

const hentTittel = (status: StatusTyper) => {
    if (status === StatusTyper.NY) {
        return 'Ny sykmelding';
    }

    return 'Sykmelding';
};

const SykmeldingPanel = ({ lenke, ekstern, sykmeldingData }: SykmeldingPanelProps) => {
    const { status, sykmelding } = sykmeldingData;

    const perioderMedGraderingOgLengdeTekst = sykmelding.perioder.map(periode =>
        tilLesbarPeriodeMedGraderingOgArbeidsgiver(periode, sykmelding.arbeidsgiver),
    );
    const statustekst = hentStatusTekst(status, sykmelding.arbeidsgiver);
    const tittel = hentTittel(status.status);

    return (
        <LenkepanelWrapper
            lenke={lenke}
            ekstern={ekstern}
            tittel={tittel}
            tekstGra={perioderMedGraderingOgLengdeTekst}
            tekstStatus={statustekst}
            svg={bjorn}
            ikonbakgrunn="gul"
        />
    );
};

export default SykmeldingPanel;
