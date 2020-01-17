import { aktivSoknad, godkjentSoknad, inaktivSoknad, sendtSoknad } from './soknader';
import { avbruttSykmelding } from './avbruttSykmelding';
import { avvistSykmelding } from './avvistSykmelding';
import { bekreftetSykmelding } from './bekreftetSykmelding';
import { nySykmelding } from './nysykmelding';
import { sendtSykmelding } from './sendtSykmelding';

export const ingenSykmeldingerIngenSoknader = [];

export const toNyeSykmeldingerInaktivSoknad = [
    {
        id: 'fravaerId',
        // TODO: åpne for samme type søknad med litt annen data
        // TODO: lag funksjon for å definere startdato og lengde på søknad
        sykmeldinger: [nySykmelding('sykmelding1'), nySykmelding('sykmelding2')],
        soknader: [],
    },
    {
        id: 'fravaerId2',
        sykmeldinger: [bekreftetSykmelding('sykmelding3')],
        soknader: [godkjentSoknad('sykmelding3')],
    },
];

export const toSykmeldingerInaktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [nySykmelding('sykmelding1'), sendtSykmelding('sykmelding2')],
        soknader: [inaktivSoknad('sykmelding2')],
    },
    {
        id: 'fravaerId2',
        sykmeldinger: [bekreftetSykmelding('sykmelding3')],
        soknader: [godkjentSoknad('sykmelding3')],
    },
];

export const toSykmeldingerAktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [nySykmelding('sykmelding1'), sendtSykmelding('sykmelding2')],
        soknader: [aktivSoknad('sykmelding2')],
    },
    {
        id: 'fravaerId2',
        sykmeldinger: [bekreftetSykmelding('sykmelding3')],
        soknader: [godkjentSoknad('sykmelding3')],
    },
];

export const sendtSykmeldingAktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [sendtSykmelding('sykmelding1')],
        soknader: [aktivSoknad('sykmelding1')],
    },
];

export const sendtSykmeldingInaktivSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [sendtSykmelding('sykmelding1')],
        soknader: [inaktivSoknad('sykmelding1')],
    },
];

export const sendtSykmeldingSendtSoknad = [
    {
        id: 'fravaerId',
        sykmeldinger: [sendtSykmelding('sykmelding1')],
        soknader: [sendtSoknad('sykmelding1')],
    },
];
