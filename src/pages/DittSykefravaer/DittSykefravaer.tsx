import React from "react";

import konsultasjon from "../../svg/konsultasjon.svg";
import bjorn from "../../svg/bjorn.svg";

import Brodsmuler, { Brodsmule } from "../../components/brodsmuler/brodsmuler";
import { Sidetittel, Systemtittel } from "nav-frontend-typografi";
import Veileder from "../../components/veileder/Veileder";
import Card from "./components/Card";
import RelatertInfo from "./components/RelatertInfo";
import CardContainer from "./components/CardContainer";

import "./DittSykefravaer.less";
import LenkepanelWrapper from "./components/LenkepanelWrapper";

const brodsmuler: Brodsmule[] = [
  {
    tittel: "Ditt sykefravaer",
    sti: "/",
    erKlikkbar: true
  }
];

const DittSykefravaer = () => {
  document.title = "Ditt sykefravær - www.nav.no";

  return (
    <>
      <div className="sykefravaer-header">
        <div className="limit-short">
          <Brodsmuler brodsmuler={brodsmuler} />
          <Sidetittel>Ditt sykefravær</Sidetittel>
          <img
            className="sykefravaer-header__image"
            src={konsultasjon}
            alt="Konsultasjon"
          />
        </div>
      </div>

      <div className="limit">
        <Veileder
          kompakt
          innhold={
            <>
              <Systemtittel>Velkommen til ditt sykefravær.</Systemtittel>
              <p>
                Denne tjenesten gir deg en detaljert oversikt over
                sykmeldingsperioden din. Her får du informasjon om hva som er
                blitt gjort eller må gjøres før vi kan utbetale sykepenger.
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
