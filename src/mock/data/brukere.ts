import { sykefravaerMock } from './sykefravaer';

export const brukere = [
    { value: 'bruker1', label: 'Ingen sykmelding, ingen søknader', sykefravaer: sykefravaerMock },
    { value: 'bruker2', label: 'Ny sykmelding, inaktiv søknad', sykefravaer: [] },
    { value: 'bruker3', label: 'To nye sykmeldinger, inaktiv søknad', sykefravaer: [] },
    { value: 'bruker4', label: 'Ny sykmelding, aktiv søknad for tidligere sykmelding', sykefravaer: [] },
    { value: 'bruker5', label: 'Tidligere sykmelding, aktiv søknad', sykefravaer: [] },
    { value: 'bruker6', label: 'Tidligere sykmelding, inaktiv søknad', sykefravaer: [] },
    { value: 'bruker7', label: 'Tidligere sykmelding, levert søknad', sykefravaer: [] },
];

/*
TODO:
- sett opp alle brukernes sykefravær slik at de stemmer overens med label over
- finn ut av hvordan vi kan kjøre DataFetcher-kallet på nytt etter at mock er oppdatert
*/
