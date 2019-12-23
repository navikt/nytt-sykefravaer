import React from 'react';

import bjorn from '../../svg/bjorn.svg';

import { Brodsmule } from '../../components/brodsmuler/brodsmuler';
import { Systemtittel } from 'nav-frontend-typografi';
import Veileder from '../../components/veileder/Veileder';
import Card from './components/Card';
import RelatertInfo from './components/RelatertInfo';
import CardContainer from './components/CardContainer';
import SykefravaerHeader from './components/SykefravaerHeader';

import LenkepanelWrapper from './components/LenkepanelWrapper';

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
                    innhold={
                        <>
                            <Systemtittel>Velkommen til ditt sykefravær.</Systemtittel>
                            <p>Denne teksten avhenger av hvilke sykemeldinger brukeren har/ikke har.</p>
                        </>
                    }
                    stemning="glad"
                    onClick={() => {}}
                    knappTekst="Demo knapp"
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
