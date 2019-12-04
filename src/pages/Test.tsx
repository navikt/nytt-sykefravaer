import React from "react";

import Brodsmuler, { Brodsmule } from "../components/brodsmuler/brodsmuler";

const brodsmuler: Brodsmule[] = [
  {
    tittel: "Ditt sykefravaer",
    sti: "/",
    erKlikkbar: true
  },
  {
    tittel: "Sykmeldinger",
    sti: "/sykmeldinger",
    erKlikkbar: true
  },
  {
    tittel: "Sykmelding",
    sti: "/sykmeldinger/:id",
    erKlikkbar: false
  }
];

const Test = () => {
  return (
    <div className="limit">
      <Brodsmuler brodsmuler={brodsmuler} />
      Ditt sykefravaer
    </div>
  );
};

export default Test;
