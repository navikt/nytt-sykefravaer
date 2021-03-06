import React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

import Card from './components/Card/Card';
import CardContainer from './components/Card/CardContainer';
import Lenkeelement from './components/Lenkesamling/Lenkeelement';
import LenkepanelWrapper from '../../components/Lenkepanel/LenkepanelWrapper';
import Lenkesamling from './components/Lenkesamling/Lenkesamling';
import OverskriftSkille from '../../components/OverskriftSkille/OverskriftSkille';
import SykefravaerHeader from './components/SykefravaerHeader';
import SykefravaerPanel from '../FravaersOversikt/components/SykefravaerPanel';
import Veileder from '../../components/Veileder/Veileder';
import bjorn from '../../svg/bjorn.svg';
import setDocumentTittel from '../../utils/setDocumentTittel';
import { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';
import { useSykefravaer } from '../../hooks/useSykefravaer';

// TODO: Sett opp logikk for henting av veileder basert på tilgjengelige sykefravær

const SIDETITTEL = 'Ditt sykefravær';

const brodsmuler: Brodsmule[] = [
    {
        tittel: SIDETITTEL,
        sti: '/',
        erKlikkbar: true,
    },
];

const Seksjon = ({ children }: { children: any }) => {
    return <div style={{ marginBottom: '2rem' }}>{children}</div>;
};

const DittSykefravaer = () => {
    setDocumentTittel(SIDETITTEL);
    const { sykefravaerMedNyeVarsler } = useSykefravaer();

    return (
        <>
            <SykefravaerHeader brodsmuler={brodsmuler} />
            <div className="limit">
                {/* I hvilke tilfeller veileder skal vises er ikke definert enda. */ false && (
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
                )}

                <Seksjon>
                    <OverskriftSkille tekst="Nye varsler" />
                    {sykefravaerMedNyeVarsler?.map(fravaer => (
                        <SykefravaerPanel key={fravaer.id} lenke={`/fravaer/${fravaer.id}`} sykefravaer={fravaer} />
                    ))}
                    <LenkepanelWrapper
                        lenke="/fravaer"
                        tittel="Oversikt over dine sykefravær"
                        tekstGra="Her finner du pågående- og tidligere sykefravær med tilhørende dokumenter: Sykmeldinger, søknader, svar fra NAV og utbetalingsdetaljer."
                        svg={bjorn}
                        ikonbakgrunn="gul"
                    />
                </Seksjon>
                <Seksjon>
                    <OverskriftSkille tekst="Informasjon og veiledning" />

                    <LenkepanelWrapper
                        lenke="/forklart"
                        tittel="Digital sykmelding forklart"
                        tekstGra={[
                            'Tradisjonelt har sykmeldingen blitt skrevet ut på papir.',
                            'Her viser vi deg hvordan den digitale sykmeldingen fungerer.',
                        ]}
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
                </Seksjon>

                <Seksjon>
                    <Lenkesamling>
                        <Lenkeelement tekst="Digital sykmelding" lenke="" />
                        <Lenkeelement tekst="Begrepsforklaring" lenke="" />
                        <Lenkeelement tekst="Personvern" lenke="" />
                        <Lenkeelement tekst="Ofte stilte spørsmål" lenke="" />
                        <Lenkeelement tekst="Syk i svangerskapsperioden" lenke="" />
                        <Lenkeelement tekst="Overgang til AAP" lenke="https://www.nrk.no/" ekstern />
                        <Lenkeelement tekst="Opphold i utlandet" lenke="https://www.nrk.no/" ekstern />
                        <Lenkeelement tekst="Regelverk" lenke="https://www.nrk.no" ekstern />
                        <Lenkeelement tekst="Slik klager du" lenke="https://www.nrk.no/" ekstern />
                    </Lenkesamling>
                </Seksjon>
            </div>
        </>
    );
};

export default DittSykefravaer;
