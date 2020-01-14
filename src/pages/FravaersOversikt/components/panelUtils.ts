import dayjs from 'dayjs';

import { Periode } from '../../../types/sykmeldingTypes';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';

const hentForsteFomIPerioder = (perioder: Periode[]) => {
    const forstePeriode = perioder.reduce((lavesteFom, periode) => {
        if (!lavesteFom) {
            return periode;
        }

        if (dayjs(periode.fom).isBefore(lavesteFom.fom)) {
            return periode;
        }
        return lavesteFom;
    });

    return forstePeriode.fom;
};

const hentSykmeldingMedEldstePeriode = (sykmeldinger: SykmeldingData[]) => {
    return sykmeldinger.reduce((laveste, curr) => {
        const lavesteFom = hentForsteFomIPerioder(laveste.sykmelding.perioder);
        const currentFom = hentForsteFomIPerioder(curr.sykmelding.perioder);

        if (dayjs(currentFom).isBefore(lavesteFom)) {
            return curr;
        }

        return laveste;
    });
};

const hentSisteTomIPerioder = (perioder: Periode[]) => {
    const nyestePeriode = perioder.reduce((nyesteTom, periode) => {
        if (!nyesteTom) {
            return periode;
        }

        if (dayjs(periode.tom).isAfter(nyesteTom.tom)) {
            return periode;
        }
        return nyesteTom;
    });

    return nyestePeriode.tom;
};

const hentSykmeldingMedNyestePeriode = (sykmeldinger: SykmeldingData[]) => {
    return sykmeldinger.reduce((laveste, curr) => {
        const lavesteFom = hentSisteTomIPerioder(laveste.sykmelding.perioder);
        const currentFom = hentSisteTomIPerioder(curr.sykmelding.perioder);

        if (dayjs(currentFom).isAfter(lavesteFom)) {
            return curr;
        }

        return laveste;
    });
};

export const hentSykefravaerTilFraDatoStreng = (sykefravaer: Sykefravaer) => {
    // TODO: Finn start på første sykmelding, og slutt på siste sykmelding.
    // - Vurder om dette skal beregnes i backend i stedet.
    const sykmeldingMedEldstePeriode = hentSykmeldingMedEldstePeriode(sykefravaer.sykmeldinger);
    const sykmeldingMedNyestePeriode = hentSykmeldingMedNyestePeriode(sykefravaer.sykmeldinger);

    const start = hentForsteFomIPerioder(sykmeldingMedEldstePeriode.sykmelding.perioder);
    const end = hentSisteTomIPerioder(sykmeldingMedNyestePeriode.sykmelding.perioder);

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
