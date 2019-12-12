export enum Beslutning {
    GODKJENT = 'GODKJENT',
    AVVIST = 'AVVIST'
}

export class Soknad {
    id: string;
    beslutning: Beslutning;
    constructor(soknad: any) {
        this.id = soknad.id;
        this.beslutning = Beslutning[soknad.beslutning as keyof typeof Beslutning];
    }
}