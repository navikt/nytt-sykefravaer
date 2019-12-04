import createUseContext from "constate";
import { useState } from "react";
import { Sykmelding } from "../types/sykmeldingTypes";

const useAppStore = createUseContext(() => {
  const [sykmeldinger, setSykmeldinger] = useState<Sykmelding[] | null>(null);
  return {
    sykmeldinger,
    setSykmeldinger
  };
});

export default useAppStore;
