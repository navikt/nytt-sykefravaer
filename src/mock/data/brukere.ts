import {
    ingenSykmeldingerIngenSoknader,
    nySykmeldingAktivSoknad,
    nySykmeldingInaktivSoknad,
    sendtSykmeldingAktivSoknad,
    sendtSykmeldingInaktivSoknad,
    sendtSykmeldingSendtSoknad,
    toNyeSykmeldingerInaktivSoknad,
    toSykmeldingerInaktivSoknad,
} from './sykefravaer';

// TODO: Legg til støtte for tidligere fravær
// - Krever modellendring. Sykefravær må inneholde en eller flere sykefravær.
export const brukere = [
    { value: 'bruker1', label: 'Ingen sykmelding, ingen søknader', sykefravaer: ingenSykmeldingerIngenSoknader },
    { value: 'bruker2', label: 'Ny sykmelding, inaktiv søknad', sykefravaer: nySykmeldingInaktivSoknad },
    { value: 'bruker3', label: 'To nye sykmeldinger, inaktiv søknad', sykefravaer: toNyeSykmeldingerInaktivSoknad },
    {
        value: 'bruker8',
        label: 'Ny sykmelding, bekreftet sykmelding. Inaktiv søknad',
        sykefravaer: toSykmeldingerInaktivSoknad,
    },
    {
        value: 'bruker4',
        label: 'Ny sykmelding, aktiv søknad for tidligere sykmelding',
        sykefravaer: nySykmeldingAktivSoknad,
    },
    { value: 'bruker5', label: 'Tidligere sykmelding, aktiv søknad', sykefravaer: sendtSykmeldingAktivSoknad },
    { value: 'bruker6', label: 'Tidligere sykmelding, inaktiv søknad', sykefravaer: sendtSykmeldingInaktivSoknad },
    { value: 'bruker7', label: 'Tidligere sykmelding, levert søknad', sykefravaer: sendtSykmeldingSendtSoknad },
];
