import { Arbeidsgiver, Periode } from '../types/sykmeldingTypes';
import { hentDagerMellomDatoer } from '../utils/datoUtils';

export const tilLesbarPeriodeMedGraderingOgArbeidsgiver = (periode: Periode, arbeidsgiver: Arbeidsgiver): string => {
    const gradering = periode.gradert && periode.gradert.grad ? periode.gradert.grad : 100;
    const arbeidsgiverNavn = arbeidsgiver.navn ? arbeidsgiver.navn : 'Ukjent arbeidsgiver';
    const periodelengde = hentDagerMellomDatoer(periode.fom, periode.tom);

    return `${arbeidsgiverNavn} • ${gradering.toString()}% i ${periodelengde} dager`;
};
