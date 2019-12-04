import React from "react";
import { Knapp } from "nav-frontend-knapper";
import { useHistory } from "react-router-dom";

import Brodsmuler, { Brodsmule } from "../components/brodsmuler/brodsmuler";

const brodsmuler: Brodsmule[] = [
  {
    tittel: "Ditt sykefravaer",
    sti: "/",
    erKlikkbar: true
  },
  {
    tittel: "Dine sykmeldinger",
    sti: "/",
    erKlikkbar: true
  }
];

const DineSykmeldinger = () => {
  const history = useHistory();

  return (
    <div className="limit">
      <Brodsmuler brodsmuler={brodsmuler} />
      Dine sykmeldinger
      <Knapp onClick={() => history.push("/sykmeldinger/abc123")}>
        Sykmelding 05. nov - 21. nov 2019
      </Knapp>
    </div>
  );
};

export default DineSykmeldinger;
