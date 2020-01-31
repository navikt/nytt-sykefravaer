import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Arbeidsgiver, Soknad } from '../../../types/soknadTypes/soknadTypes';
import { RSSoknadstatus } from '../../../types/soknadTypes/rs-types/rs-soknadstatus';
import { hentDagerMellomDatoer } from '../../../utils/datoUtils';
import { tilLesbarDato } from '../../FravaersOversikt/components/panelUtils';

export const tilLesbarFomTomOgArbeidsgiver = (fom: Date, tom: Date, arbeidsgiver?: Arbeidsgiver): string => {
    const arbeidsgiverNavn = arbeidsgiver?.navn ? arbeidsgiver.navn : 'Ukjent arbeidsgiver';
    const periodelengde = hentDagerMellomDatoer(fom, tom);

    return `${arbeidsgiverNavn} i ${periodelengde} dager`;
};

interface SoknadPanelProps {
    lenke: string;
    soknad: Soknad;
}

const hentStatusTekst = (status: RSSoknadstatus, arbeidsgiver?: Arbeidsgiver) => {
    if (status === RSSoknadstatus.NY) {
        return 'Klikk for å fylle ut søknad og sende nå';
    }

    // TODO: Vedtak godkjent
    if (false && status === RSSoknadstatus.SENDT) {
        // TODO: Hent dato fra søknad
        return `Søknad om sykepenger aktiveres ${tilLesbarDato(new Date())}`;
    }

    // TODO: Vedtak avslått
    if (false && status === RSSoknadstatus.AVBRUTT) {
        return 'Klikk for å se svar fra NAV nå';
    }

    //
    if (status === RSSoknadstatus.SENDT) {
        // TODO: Hent dato fra søknad
        return `Søknad ble sendt til ${arbeidsgiver ? arbeidsgiver.navn : 'NAV'} ${tilLesbarDato(new Date())}`;
    }

    return '';
};

const SoknadPanel = ({ lenke, soknad }: SoknadPanelProps) => {
    const periodeMedGraderingOgLengdeTekst = tilLesbarFomTomOgArbeidsgiver(soknad.fom, soknad.tom, soknad.arbeidsgiver);

    const statusTekst = hentStatusTekst(soknad.status, soknad.arbeidsgiver);

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
