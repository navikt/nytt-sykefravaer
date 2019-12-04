import React from "react";
import { Knapp } from "nav-frontend-knapper";
import { useHistory, useParams } from "react-router-dom";

import Brodsmuler, { Brodsmule } from "../components/brodsmuler/brodsmuler";

const getBrodsmuler = (id: string) => {
  return [
    {
      tittel: "Ditt sykefravaer",
      sti: "/",
      erKlikkbar: true
    },
    {
      tittel: "Dine sykmeldinger",
      sti: "/sykmeldinger",
      erKlikkbar: true
    },
    {
      tittel: "Sykmelding",
      sti: `/sykmeldinger/${id}`,
      erKlikkbar: true
    },
    {
      tittel: "Inntektsmelding",
      sti: `/sykmeldinger/${id}/inntekstmelding`,
      erKlikkbar: true
    }
  ];
};

const Inntektsmelding = () => {
  const history = useHistory();
  const { id } = useParams();
  if (!id) {
    return null;
  }

  const brodsmuler = getBrodsmuler(id);

  return (
    <div className="limit">
      <Brodsmuler brodsmuler={brodsmuler} />
      Inntektsmelding
    </div>
  );
};

export default Inntektsmelding;
