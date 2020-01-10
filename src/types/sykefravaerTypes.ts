import { SykmeldingData } from './sykmeldingDataTypes';
import { Soknad } from './soknadTypes';

export class Sykefravaer {
    id: string;
    sykmeldinger: SykmeldingData[];
    soknader: Soknad[];
    constructor(data: any) {
        this.id = data.id;
        this.sykmeldinger = data.sykmeldinger;
        this.soknader = data.soknader;
    }
}
