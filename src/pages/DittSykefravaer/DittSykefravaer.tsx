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
                        tittel="Sykefravær forklart"
                        tekst="Vi har laget en tidslinje som viser deg hva som skjer under sykefraværet ved sykmelding over lengre tid."
                        lenke="/tidslinjen/"
                    />
                    <Card
                        tittel="Kontakt en veileder"
                        tekst="Har du spørsmål vedrørende sykefravær eller trenger du informasjon fra en av våre veiledere?"
                        lenke="/oppfolgingsplan/oppfolgingsplaner"
                    />
                    <Card
                        tittel="Personinfo"
                        tekst="Informasjonen vi innhenter for å vurdere dine søknader. Her kan du se og endre informasjonen."
                        lenke="www.nav.no"
                    />
                </CardContainer>

                <RelatertInfo />
            </div>
        </>
    );
};

export default DittSykefravaer;
