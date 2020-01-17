export const sendtSoknad = (sykmeldingId: string) => ({
    id: 'soknad1',
    beslutning: 'SENDT',
    sykmeldingId,
    periode: {
        fom: '2018-09-01',
        tom: '2018-10-01',
    },
    arbeidsgiver: {
        harArbeidsgiver: true,
        navn: 'Firma X',
    },
});

export const inaktivSoknad = (sykmeldingId: string) => ({
    id: 'soknad2',
    beslutning: 'INAKTIV',
    sykmeldingId,
    periode: {
        fom: '2018-09-01',
        tom: '2018-10-01',
    },
    arbeidsgiver: {
        harArbeidsgiver: true,
        navn: 'Firma X',
    },
});

export const aktivSoknad = (sykmeldingId: string) => ({
    id: 'soknad3',
    beslutning: 'AKTIV',
    sykmeldingId,
    periode: {
        fom: '2018-09-01',
        tom: '2018-10-01',
    },
    arbeidsgiver: {
        harArbeidsgiver: true,
        navn: 'Firma X',
    },
});

export const godkjentSoknad = (sykmeldingId: string) => ({
    id: 'soknad4',
    beslutning: 'GODKJENT',
    sykmeldingId,
    periode: {
        fom: '2018-09-01',
        tom: '2018-10-01',
    },
    arbeidsgiver: {
        harArbeidsgiver: true,
        navn: 'Firma X',
    },
});
