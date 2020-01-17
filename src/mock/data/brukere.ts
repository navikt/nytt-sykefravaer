import {
    ingenSykmeldingerIngenSoknader,
    sendtSykmeldingAktivSoknad,
    sendtSykmeldingInaktivSoknad,
    sendtSykmeldingSendtSoknad,
    toNyeSykmeldingerInaktivSoknad,
    toSykmeldingerAktivSoknad,
    toSykmeldingerInaktivSoknad,
} from './sykefravaer';

export const brukere = [
    { value: 'bruker1', label: 'Ingen sykmelding, ingen søknader', sykefravaer: ingenSykmeldingerIngenSoknader },
    { value: 'bruker2', label: 'To nye sykmeldinger, inaktiv søknad', sykefravaer: toNyeSykmeldingerInaktivSoknad },
    {
        value: 'bruker3',
        label: 'Ny sykmelding, bekreftet sykmelding. Inaktiv søknad',
        sykefravaer: toSykmeldingerInaktivSoknad,
    },
    {
        value: 'bruker4',
        label: 'Ny sykmelding, bekreftet sykmelding. Aktiv søknad',
        sykefravaer: toSykmeldingerAktivSoknad,
    },
    { value: 'bruker5', label: 'Tidligere sykmelding, aktiv søknad', sykefravaer: sendtSykmeldingAktivSoknad },
    { value: 'bruker6', label: 'Tidligere sykmelding, inaktiv søknad', sykefravaer: sendtSykmeldingInaktivSoknad },
    { value: 'bruker7', label: 'Tidligere sykmelding, levert søknad', sykefravaer: sendtSykmeldingSendtSoknad },
];
