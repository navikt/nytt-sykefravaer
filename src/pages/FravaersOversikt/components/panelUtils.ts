import dayjs from 'dayjs';

import { Beslutning } from '../../../types/soknadTypes';
import { Periode, StatusTyper, Sykmelding } from '../../../types/sykmeldingTypes';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';

const hentForsteFomIPerioder = (perioder: Periode[]) => {
    const forstePeriode = perioder.reduce((lavesteFom: Periode | undefined, periode) => {
        if (!lavesteFom) {
            return periode;
        }

        if (dayjs(periode.fom).isBefore(lavesteFom.fom)) {
            return periode;
        }
        return lavesteFom;
    }, undefined);

    return forstePeriode?.fom;
};

const hentSykmeldingMedEldstePeriode = (sykmeldinger: SykmeldingData[]) => {
    return sykmeldinger.reduce((laveste: SykmeldingData | undefined, curr) => {
        if (!laveste) {
            return curr;
        }

        const lavesteFom = hentForsteFomIPerioder(laveste.sykmelding.perioder);

        if (!lavesteFom) {
            return curr;
        }

        const currentFom = hentForsteFomIPerioder(curr.sykmelding.perioder);

        if (dayjs(currentFom).isBefore(lavesteFom)) {
            return curr;
        }

        return laveste;
    }, undefined);
};

const hentSisteTomIPerioder = (perioder: Periode[]) => {
    const nyestePeriode = perioder.reduce((nyesteTom: Periode | undefined, periode) => {
        if (!nyesteTom) {
            return periode;
        }

        if (dayjs(periode.tom).isAfter(nyesteTom.tom)) {
            return periode;
        }
        return nyesteTom;
    }, undefined);

    return nyestePeriode?.tom;
};

const hentSykmeldingMedNyestePeriode = (sykmeldinger: SykmeldingData[]) => {
    return sykmeldinger.reduce((laveste: SykmeldingData | undefined, curr) => {
        if (!laveste) {
            return curr;
        }

        const lavesteFom = hentSisteTomIPerioder(laveste.sykmelding.perioder);

        if (!lavesteFom) {
            return curr;
        }

        const currentFom = hentSisteTomIPerioder(curr.sykmelding.perioder);

        if (dayjs(currentFom).isAfter(lavesteFom)) {
            return curr;
        }

        return laveste;
    }, undefined);
};

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

    const lesbarDatoStreng = tilLesbarDatoStreng(start, end);

    return `Sykefravær fra ${lesbarDatoStreng}`;
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

export const fravaerHarNySykmelding = (sykefravaer: Sykefravaer) => {
    return sykefravaer.sykmeldinger.some(sykmelding => sykmelding.status.status === StatusTyper.NY);
};

export const fravaerHarAktivSoknad = (sykefravaer: Sykefravaer) => {
    return sykefravaer.soknader.some(soknad => soknad.beslutning === Beslutning.AKTIV);
};

export const hentAntallNyeSykmeldinger = (sykefravaer: Sykefravaer) => {
    return sykefravaer.sykmeldinger.filter(sykmelding => sykmelding.status.status === StatusTyper.NY).length;
};

export const hentAntallAktiveSoknader = (sykefravaer: Sykefravaer) => {
    return sykefravaer.soknader.filter(soknad => soknad.beslutning === Beslutning.AKTIV).length;
};
