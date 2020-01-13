import { avbruttSykmelding } from './avbruttSykmelding';
import { avvistSykmelding } from './avvistSykmelding';
import { bekreftetSykmelding } from './bekreftetSykmelding';
import { nySykmelding } from './nysykmelding';
import { sendtSykmelding } from './sendtSykmelding';

const soknad1 = {
    id: 'soknad1',
    beslutning: 'godkjent',
};

const soknad2 = {
    id: 'soknad2',
    beslutning: 'avvist',
};

export const sykefravaerMock = [
    {
        id: 'fravaer1',
        sykmeldinger: [nySykmelding, avvistSykmelding],
        soknader: [soknad1, soknad2],
    },
    {
        id: 'fravaer2',
        sykmeldinger: [nySykmelding, avbruttSykmelding, bekreftetSykmelding, sendtSykmelding],
        soknader: [soknad1],
    },
];
