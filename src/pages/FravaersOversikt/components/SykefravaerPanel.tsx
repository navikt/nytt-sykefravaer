import React from 'react';
import dayjs from 'dayjs';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Beslutning } from '../../../types/soknadTypes';
import { Periode, StatusTyper } from '../../../types/sykmeldingTypes';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';

interface SykefravaerPanelProps {
    lenke: string;
    sykefravaer: Sykefravaer;
}

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

const hentSykefravaerTilFraDatoStreng = (sykefravaer: Sykefravaer) => {
    // TODO: Finn start på første sykmelding, og slutt på siste sykmelding.
    // - Vurder om dette skal beregnes i backend i stedet.
    const sykmeldingMedEldstePeriode = hentSykmeldingMedEldstePeriode(sykefravaer.sykmeldinger);
    const sykmeldingMedNyestePeriode = hentSykmeldingMedNyestePeriode(sykefravaer.sykmeldinger);

    const start = hentForsteFomIPerioder(sykmeldingMedEldstePeriode.sykmelding.perioder);
    const end = hentSisteTomIPerioder(sykmeldingMedNyestePeriode.sykmelding.perioder);

    const erSammeAr = dayjs(start).isSame(dayjs(end), 'year');
    const erSammeMnd = dayjs(start).isSame(dayjs(end), 'month');

    const lesbarFra = dayjs(start).format(`DD. ${erSammeMnd ? '' : 'MMMM'} ${erSammeAr ? '' : 'YYYY'}`);
    const lesbarTil = dayjs(end).format(`DD. MMMM YYYY`);

    return `Sykefravær fra ${lesbarFra} - ${lesbarTil}`;
};

const SykefravaerPanel = ({ lenke, sykefravaer }: SykefravaerPanelProps) => {
    const tilFraDatoStreng = hentSykefravaerTilFraDatoStreng(sykefravaer);

    const antallUbehandledeSykmeldinger = sykefravaer.sykmeldinger.filter(
        sykmelding => sykmelding.status.status === StatusTyper.NY,
    ).length;
    // TODO: Antall søknader er ubrukt
    const antallUbehandledeSoknader = sykefravaer.soknader.filter(
        soknad => soknad.beslutning === Beslutning.AVVIST || soknad.beslutning === Beslutning.AKTIV,
    ).length;

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={tilFraDatoStreng}
            tekstGra={`${antallUbehandledeSykmeldinger} ${
                antallUbehandledeSykmeldinger > 1 ? 'nye sykmeldinger' : 'ny sykmelding'
            } må bekreftes og sendes til arbeidsgiver/NAV`}
            ikonbakgrunn="gul"
            svg={bjorn}
        />
    );
};

export default SykefravaerPanel;
