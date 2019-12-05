import React from "react";
import { Knapp } from "nav-frontend-knapper";
import { useHistory, Link } from "react-router-dom";

import konsultasjon from "../../svg/konsultasjon.svg";
import bjorn from "../../svg/bjorn.svg";

import Brodsmuler, { Brodsmule } from "../../components/brodsmuler/brodsmuler";
import { Sidetittel, Normaltekst, Systemtittel } from "nav-frontend-typografi";
import Veileder from "../../components/veileder/Veileder";
import { LenkepanelBase } from "nav-frontend-lenkepanel";
import Card from "./components/Card";
import RelatertInfo from "./components/RelatertInfo";
import CardContainer from "./components/CardContainer";

const brodsmuler: Brodsmule[] = [
  {
    tittel: "Ditt sykefravaer",
    sti: "/",
    erKlikkbar: true
  }
];

const DittSykefravaer = () => {
  const history = useHistory();

  return (
    <>
      <div
        style={{
          borderBottom: "5px solid #87D5EE",
          backgroundColor: "#C2EAF7",
          position: "relative",
          marginBottom: "2rem"
        }}
      >
        <div className="limit-short">
          <Brodsmuler brodsmuler={brodsmuler} />
          <Sidetittel>Ditt sykefravær</Sidetittel>
          <img
            style={{
              position: "absolute",
              right: "0.5rem",
              left: "auto",
              bottom: -5,
              display: "block"
            }}
            src={konsultasjon}
          />
        </div>
      </div>

      <div className="limit">
        <Veileder
          kompakt
          innhold={
            <>
              <Normaltekst>Velkommen til ditt sykefravær.</Normaltekst>
              <br />
              <Normaltekst>
                Denne tjenesten gir deg en detaljert oversikt over
                sykmeldingsperioden din. Her får du informasjon om hva som er
                blitt gjort eller må gjøres før vi kan utbetale sykepenger.
              </Normaltekst>
            </>
          }
        />

        <LenkepanelBase
          border
          href=""
          linkCreator={linkProps => <Link {...linkProps} to="/sykmeldinger/" />}
        >
          <div style={{ display: "flex", padding: "0.5rem" }}>
            <img src={bjorn} width={90} />
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

        <div>
          <div style={{ display: "flex", paddingBottom: "1rem" }}>
            <div style={{ flex: 1, marginTop: "0.3rem" }}>
              <hr />
            </div>

            <Systemtittel
              style={{
                flex: 0,
                textAlign: "center",
                whiteSpace: "nowrap",
                padding: "0 1rem 0 1rem"
              }}
            >
              Relatert informasjon
            </Systemtittel>
            <div style={{ flex: 1, marginTop: "0.3rem" }}>
              <hr />
            </div>
          </div>

          <RelatertInfo />
        </div>
      </div>
    </>
  );
};

export default DittSykefravaer;
