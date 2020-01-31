import { Soknad } from './soknadTypes/soknadTypes';
import { SykmeldingData } from './sykmeldingDataTypes';

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
