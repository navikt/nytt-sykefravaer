import React from "react";
import { Knapp } from "nav-frontend-knapper";
import { useHistory, useParams } from "react-router-dom";

import Brodsmuler from "../components/brodsmuler/brodsmuler";

const getBrodsmuler = (id: string) => {
  return [
    {
      tittel: "Ditt sykefravaer",
      sti: "/",
      erKlikkbar: true
    },
    {
      tittel: "Dine sykeperioder",
      sti: "/sykmeldinger",
      erKlikkbar: true
    },
    {
      tittel: "Sykmelding",
      sti: `/${id}`,
      erKlikkbar: true
    }
  ];
};

const SykmeldingOversikt = () => {
  document.title = "Sykmelding - www.nav.no";

  const history = useHistory();
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const brodsmuler = getBrodsmuler(id);

  return (
    <div className="limit">
      <Brodsmuler brodsmuler={brodsmuler} />
      Sykmelding Steg før utbetaling
      <hr />
      <div>
        1. sykmelding er bekreftet/sendt -> 2. søknad -> 3. søknad behandles
      </div>
      <br />
      Dokumenthistorikk
      <hr />
      <Knapp
        onClick={() => history.push("/sykmeldinger/abc123/inntektsmelding")}
      >
        Inntektsmelding
      </Knapp>
      <Knapp onClick={() => history.push("/sykmeldinger/abc123/vis")}>
        Sykmelding (Vis sykmelding?)
      </Knapp>
      <Knapp onClick={() => history.push("/sykmeldinger/abc123/soknad")}>
        Søkander om sykepenger for periode
      </Knapp>
      <Knapp onClick={() => history.push("/sykmeldinger/abc123/beslutning")}>
        Beslutning fra NAV
      </Knapp>
    </div>
  );
};

export default SykmeldingOversikt;
