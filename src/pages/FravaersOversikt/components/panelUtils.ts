import dayjs from 'dayjs';

import { RSSoknadstatus } from '../../../types/soknadTypes/rs-types/rs-soknadstatus';
import { StatusTyper } from '../../../types/sykmeldingTypes';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import {
    hentForsteFomIPerioder,
    hentSisteTomIPerioder,
    hentSykmeldingMedEldstePeriode,
    hentSykmeldingMedNyestePeriode,
} from '../../../store/selectAppStore';

export const hentSykefravaerTilFraDatoStreng = (sykefravaer: Sykefravaer) => {
    // TODO: Finn start på første sykmelding, og slutt på siste sykmelding.
    // - Vurder om dette skal beregnes i backend i stedet.
    const sykmeldingMedEldstePeriode = hentSykmeldingMedEldstePeriode(sykefravaer.sykmeldinger);
    const sykmeldingMedNyestePeriode = hentSykmeldingMedNyestePeriode(sykefravaer.sykmeldinger);

    if (!sykmeldingMedEldstePeriode || !sykmeldingMedNyestePeriode) {
        return '';
    }

    const start = hentForsteFomIPerioder(sykmeldingMedEldstePeriode.sykmelding.perioder);
    const end = hentSisteTomIPerioder(sykmeldingMedNyestePeriode.sykmelding.perioder);

    if (!start || !end) {
        return '';
    }

    return tilLesbarDatoStreng(start, end);
};

const tilLesbarFraDato = (start: Date, end: Date) => {
    const erSammeAr = dayjs(start).isSame(dayjs(end), 'year');
    const erSammeMnd = dayjs(start).isSame(dayjs(end), 'month');

    return dayjs(start).format(`DD. ${erSammeMnd ? '' : 'MMMM'} ${erSammeAr ? '' : 'YYYY'}`);
};

export const tilLesbarDato = (dato: Date) => {
    return dayjs(dato).format(`DD. MMMM YYYY`);
};

const tilLesbarDatoStreng = (start: Date, end: Date) => {
    const lesbarFra = tilLesbarFraDato(start, end);
    const lesbarTil = tilLesbarDato(end);

    return `${lesbarFra} - ${lesbarTil}`;
};

export const hentAntallNyeSykmeldinger = (sykefravaer: Sykefravaer) => {
    return sykefravaer.sykmeldinger.filter(sykmelding => sykmelding.status.status === StatusTyper.NY).length;
};

export const hentAntallNyeSoknader = (sykefravaer: Sykefravaer) => {
    return sykefravaer.soknader.filter(soknad => soknad.status === RSSoknadstatus.NY).length;
};

export const hentAntallFremtidigeSoknader = (sykefravaer: Sykefravaer) => {
    return sykefravaer.soknader.filter(soknad => soknad.status === RSSoknadstatus.FREMTIDIG).length;
};
