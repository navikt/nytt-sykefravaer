import createUseContext from "constate";
import { useState } from "react";
import { SykmeldingData } from "../types/sykmeldingDataTypes";

const useAppStore = createUseContext(() => {
  const [sykmeldinger, setSykmeldinger] = useState<SykmeldingData[] | null>(
    null
  );
  return {
    sykmeldinger,
    setSykmeldinger
  };
});

export default useAppStore;
