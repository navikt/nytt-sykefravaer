import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Arbeidsgiver } from '../../../types/sykmeldingTypes';
import { Beslutning, Soknad } from '../../../types/soknadTypes';
import { tilLesbarDato } from '../../FravaersOversikt/components/panelUtils';
import { tilLesbarPeriodeMedGraderingOgArbeidsgiver } from '../../../utils/periodeUtils';

interface SoknadPanelProps {
    lenke: string;
    soknad: Soknad;
}

const hentStatusTekst = (beslutning: Beslutning, arbeidsgiver: Arbeidsgiver) => {
    if (beslutning === Beslutning.AKTIV) {
        return 'Klikk for å fylle ut søknad og sende nå';
    }

    if (beslutning === Beslutning.INAKTIV) {
        // TODO: Hent dato fra søknad
        return `Søknad om sykepenger aktiveres ${tilLesbarDato(new Date())}`;
    }

    if (beslutning === Beslutning.AVVIST || beslutning === Beslutning.GODKJENT) {
        return 'Klikk for å se svar fra NAV nå';
    }

    if (beslutning === Beslutning.SENDT) {
        // TODO: Hent dato fra søknad
        return `Søknad ble sendt til ${arbeidsgiver.navn}/NAV ${tilLesbarDato(new Date())}`;
    }

    return '';
};

const SoknadPanel = ({ lenke, soknad }: SoknadPanelProps) => {
    const periodeMedGraderingOgLengdeTekst = tilLesbarPeriodeMedGraderingOgArbeidsgiver(
        soknad.periode,
        soknad.arbeidsgiver,
    );

    const statusTekst = hentStatusTekst(soknad.beslutning, soknad.arbeidsgiver);

    // TODO: Få tak i info fra soknad.
    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel="Søknad om sykepenger"
            tekstGra={periodeMedGraderingOgLengdeTekst}
            tekstStatus={statusTekst}
            svg={bjorn}
            ikonbakgrunn="gul"
        />
    );
};

export default SoknadPanel;
