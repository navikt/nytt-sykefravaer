import React from "react";
import { Knapp } from "nav-frontend-knapper";
import { useHistory } from "react-router-dom";

import Brodsmuler, { Brodsmule } from "../components/brodsmuler/brodsmuler";

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
    <div className="limit">
      <Brodsmuler brodsmuler={brodsmuler} />
      Ditt sykefravaer
      <Knapp onClick={() => history.push("/sykmeldinger/")}>
        Dine sykmeldinger
      </Knapp>
    </div>
  );
};

export default DittSykefravaer;
