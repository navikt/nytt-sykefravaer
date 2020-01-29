export enum Beslutning {
    SENDT = 'SENDT',
    AKTIV = 'AKTIV',
    FREMTIDIG = 'FREMTIDIG',
    INAKTIV = 'INAKTIV',
    AVVIST = 'AVVIST',
    GODKJENT = 'GODKJENT',
}

// TODO: Erstatt med det faktiske søknadsobjektet
export class Soknad {
    id: string;
    beslutning: Beslutning;
    sykmeldingId: string;
    periode: any;
    arbeidsgiver: any;
    constructor(soknad: any) {
        this.id = soknad.id;
        this.beslutning = Beslutning[soknad.beslutning as keyof typeof Beslutning];
        this.sykmeldingId = soknad.sykmeldingId;
        this.periode = soknad.periode;
        this.arbeidsgiver = soknad.arbeidsgiver;
    }
}
