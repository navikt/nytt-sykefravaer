import { aktivSoknad, godkjentSoknad, inaktivSoknad, sendtSoknad } from './soknader';
import { avbruttSykmelding } from './avbruttSykmelding';
import { avvistSykmelding } from './avvistSykmelding';
import { bekreftetSykmelding } from './bekreftetSykmelding';
import { nySykmelding } from './nysykmelding';
import { sendtSykmelding } from './sendtSykmelding';

export const ingenSykmeldingerIngenSoknader = [];

export const nySykmeldingInaktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [nySykmelding],
        soknader: [inaktivSoknad],
    },
];

export const toNyeSykmeldingerInaktivSoknad = [
    {
        id: 'fravaerId',
        // TODO: åpne for samme type søknad med litt annen data
        // TODO: lag funksjon for å definere startdato og lengde på søknad
        sykmeldinger: [nySykmelding, nySykmelding],
        // TODO: lag funksjon for å knytte en søknad til en sykmelding (er dette relevant?)
        soknader: [inaktivSoknad],
    },
    {
        id: 'fravaerId2',
        sykmeldinger: [bekreftetSykmelding],
        soknader: [godkjentSoknad],
    },
];

export const toSykmeldingerInaktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [nySykmelding, sendtSykmelding],
        soknader: [inaktivSoknad],
    },
    {
        id: 'fravaerId2',
        sykmeldinger: [bekreftetSykmelding],
        soknader: [godkjentSoknad],
    },
];

export const nySykmeldingAktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [nySykmelding],
        soknader: [aktivSoknad],
    },
];

export const sendtSykmeldingAktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [sendtSykmelding],
        soknader: [aktivSoknad],
    },
];

export const sendtSykmeldingInaktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [sendtSykmelding],
        soknader: [inaktivSoknad],
    },
];

export const sendtSykmeldingSendtSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [sendtSykmelding],
        soknader: [sendtSoknad],
    },
];
