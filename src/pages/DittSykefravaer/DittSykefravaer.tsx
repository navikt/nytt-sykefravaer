import React from "react";
import { Link } from "react-router-dom";

import konsultasjon from "../../svg/konsultasjon.svg";
import bjorn from "../../svg/bjorn.svg";

import Brodsmuler, { Brodsmule } from "../../components/brodsmuler/brodsmuler";
import { Sidetittel, Normaltekst, Systemtittel } from "nav-frontend-typografi";
import Veileder from "../../components/veileder/Veileder";
import { LenkepanelBase } from "nav-frontend-lenkepanel";
import Card from "./components/Card";
import RelatertInfo from "./components/RelatertInfo";
import CardContainer from "./components/CardContainer";

import "./DittSykefravaer.less";

const brodsmuler: Brodsmule[] = [
  {
    tittel: "Ditt sykefravaer",
    sti: "/",
    erKlikkbar: true
  }
];

const DittSykefravaer = () => {
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

        <LenkepanelBase
          border
          href=""
          linkCreator={linkProps => <Link {...linkProps} to="/sykmeldinger/" />}
        >
          <div style={{ display: "flex", padding: "0.5rem" }}>
            <img src={bjorn} width={90} alt="Bjørn" />
            <div style={{ marginLeft: "1rem" }}>
              <Systemtittel className="lenkepanel__heading">
                Dine sykmeldinger
              </Systemtittel>
              <p>
                Oversikt over dokumenter, status og beslutning for dine
                sykeperioder.
              </p>
            </div>
          </div>
        </LenkepanelBase>

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
