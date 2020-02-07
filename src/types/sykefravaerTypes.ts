import dayjs from 'dayjs';

import { Soknad } from './soknadTypes';
import { SykmeldingData } from './sykmeldingDataTypes';

export class Sykefravaer {
    id: string;
    fom: Date;
    tom: Date;
    sykmeldinger: SykmeldingData[];
    soknader: Soknad[];
    constructor(data: any) {
        this.id = data.id;
        this.fom = dayjs(data.fom).toDate();
        this.tom = dayjs(data.tom).toDate();
        this.sykmeldinger = data.sykmeldinger;
        this.soknader = data.soknader;
    }
}
