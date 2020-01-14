export enum Beslutning {
    SENDT = 'SENDT',
    AKTIV = 'AKTIV',
    INAKTIV = 'INAKTIV',
    AVVIST = 'AVVIST',
    GODKJENT = 'GODKJENT',
}

export class Soknad {
    id: string;
    beslutning: Beslutning;
    constructor(soknad: any) {
        this.id = soknad.id;
        this.beslutning = Beslutning[soknad.beslutning as keyof typeof Beslutning];
    }
}
