import React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

import Card from './components/Card/Card';
import CardContainer from './components/Card/CardContainer';
import LenkepanelWrapper from '../../components/Lenkepanel/LenkepanelWrapper';
import Lenkesamling from './components/Lenkesamling/Lenkesamling';
import OverskriftSkille from '../../components/OverskriftSkille/OverskriftSkille';
import SykefravaerHeader from './components/SykefravaerHeader';
import Veileder from '../../components/Veileder/Veileder';
import bjorn from '../../svg/bjorn.svg';
import setDocumentTittel from '../../utils/setDocumentTittel';
import { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';

// TODO: Sett opp logikk for henting av veileder basert på tilgjengelige sykefravær

const SIDETITTEL = 'Ditt sykefravær';

const brodsmuler: Brodsmule[] = [
    {
        tittel: SIDETITTEL,
        sti: '/',
        erKlikkbar: true,
    },
];

const DittSykefravaer = () => {
    setDocumentTittel(SIDETITTEL);

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
                <OverskriftSkille tekst="Aktuelt" />
                <LenkepanelWrapper
                    lenke="/fravaer"
                    tittel="Status i dine sykefravær"
                    tekstGra="Her finner du nye sykmeldinger, søknader om sykepenger, svar på søknader samt utbetalingsinformasjon."
                    svg={bjorn}
                    ikonbakgrunn="gul"
                />
                <OverskriftSkille tekst="Informasjon og veiledning" />
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

                <Lenkesamling />
            </div>
        </>
    );
};

export default DittSykefravaer;
