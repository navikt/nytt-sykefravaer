import { aktivSoknad, inaktivSoknad, sendtSoknad } from './soknader';
import { avbruttSykmelding } from './avbruttSykmelding';
import { avvistSykmelding } from './avvistSykmelding';
import { bekreftetSykmelding } from './bekreftetSykmelding';
import { nySykmelding } from './nysykmelding';
import { sendtSykmelding } from './sendtSykmelding';

export const ingenSykmeldingerIngenSoknader = [];

export const nySykmeldingInaktivSoknad = [
    {
        id: 'fravaer1',
        sykmeldinger: [nySykmelding],
        soknader: [inaktivSoknad],
    },
];

export const toNyeSykmeldingerInaktivSoknad = [
    {
        id: 'fravaer2',
        // TODO: åpne for samme type søknad med litt annen data
        // TODO: lag funksjon for å definere startdato og lengde på søknad
        sykmeldinger: [nySykmelding, nySykmelding],
        // TODO: lag funksjon for å knytte en søknad til en sykmelding (er dette relevant?)
        soknader: [inaktivSoknad],
    },
];

export const nySykmeldingAktivSoknad = [
    {
        id: 'fravaer3',
        sykmeldinger: [nySykmelding],
        soknader: [aktivSoknad],
    },
];

export const sendtSykmeldingAktivSoknad = [
    {
        id: 'fravaer4',
        sykmeldinger: [sendtSykmelding],
        soknader: [aktivSoknad],
    },
];

export const sendtSykmeldingInaktivSoknad = [
    {
        id: 'fravaer5',
        sykmeldinger: [sendtSykmelding],
        soknader: [inaktivSoknad],
    },
];

export const sendtSykmeldingSendtSoknad = [
    {
        id: 'fravaer5',
        sykmeldinger: [sendtSykmelding],
        soknader: [sendtSoknad],
    },
];
