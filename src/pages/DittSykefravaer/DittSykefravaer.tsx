import React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

import Card from './components/Card/Card';
import CardContainer from './components/Card/CardContainer';
import LenkepanelWrapper from './components/LenkepanelWrapper';
import RelatertInfo from './components/RelatertInfo';
import SykefravaerHeader from './components/SykefravaerHeader';
import Veileder from '../../components/Veileder/Veileder';
import bjorn from '../../svg/bjorn.svg';
import { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';

const brodsmuler: Brodsmule[] = [
    {
        tittel: 'Ditt sykefravaer',
        sti: '/',
        erKlikkbar: true,
    },
];

const DittSykefravaer = () => {
    document.title = 'Ditt sykefravær - www.nav.no';

    return (
        <>
            <SykefravaerHeader brodsmuler={brodsmuler} />
            <div className="limit">
                <Veileder
                    kompakt
                    innhold={
                        <>
                            <Systemtittel>Velkommen til ditt sykefravær.</Systemtittel>
                            <p>
                                Denne tjenesten gir deg en detaljert oversikt over sykmeldingsperioden din. Her får du
                                informasjon om hva som er blitt gjort eller må gjøres før vi kan utbetale sykepenger.
                            </p>
                        </>
                    }
                />

                <LenkepanelWrapper
                    lenke="/sykmeldinger/"
                    tittel="Dine sykmeldinger"
                    tekst="Oversikt over dokumenter, status og beslutning for dine
                sykeperioder."
                    svg={bjorn}
                />

                <CardContainer>
                    <Card
                        tittel="Informasjon om sykefravær"
                        tekst="Få oversikt over hva som skjer under et sykefravær."
                        lenke="/tidslinjen/"
                    />
                    <Card
                        tittel="Oppfølgingsplan med arbeidsgiver"
                        tekst="Lag en oppfølgingsplan med arbeidsgiver."
                        lenke="/oppfolgingsplan/oppfolgingsplaner"
                    />
                    <Card
                        tittel="Din informasjon"
                        tekst="Informasjon om arbeidsgiver, inntektsmelding (mer?)"
                        lenke="www.nav.no"
                    />
                </CardContainer>

                <RelatertInfo />
            </div>
        </>
    );
};

export default DittSykefravaer;
