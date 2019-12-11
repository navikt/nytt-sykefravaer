export const statusGenerator = (status: string) => {
  let statusObj = {
    status
  };

  if (status === "ny") {
    return statusObj;
  }

  if (status === "avvist") {
    return {
      ...statusObj,
      dato: "2018-10-10",
      datoBekreftet: "2018-10-11"
    };
  }

  if (status === "avbrutt") {
    return { ...statusObj, dato: "2018-10-10" };
  }

  if (status === "bekreftet") {
    return {
      ...statusObj,
      dato: "2018-10-10",
      sykmeldtFra: "Jobb som frilanser"
    };
  }

  if (status === "sendt") {
    return {
      ...statusObj,
      dato: "2018-10-10",
      arbeidsgiver: "TESTBEDRIFTEN AS",
      organisasjonsnummer: "999 888 777"
    };
  }

  return statusObj;
};

const diagnoser = [
  "Tendinitt ina",
  "Ganglion sene",
  "Akutt forkjølelse",
  "Benbrudd",
  "Hjertesykdom"
];
const systemer = ["ICPC-1", "ICPC-2", "AHG-6", "TORSK-1", "LSA-7"];
const koder = ["L87", "A23", "B56"];

export const diagnoseGenerator = () => ({
  system: systemer[getRandomNumber(systemer.length)],
  tekst: diagnoser[getRandomNumber(diagnoser.length)],
  kode: koder[getRandomNumber(koder.length)]
});

export const bidiagnoseGenerator = (antall: number) => {
  return [...Array(antall)].map(() => ({
    system: systemer[getRandomNumber(systemer.length)],
    tekst: diagnoser[getRandomNumber(diagnoser.length)],
    kode: koder[getRandomNumber(koder.length)]
  }));
};

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};
