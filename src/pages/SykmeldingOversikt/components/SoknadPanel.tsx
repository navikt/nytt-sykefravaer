import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Soknad } from '../../../types/soknadTypes';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';
import { tilLesbarPeriodeMedGraderingOgArbeidsgiver } from '../../../utils/periodeUtils';
interface SoknadPanelProps {
    lenke: string;
    sykmelding: SykmeldingData;
    soknad?: Soknad; // TODO: endres fra optional til mandatory
}

const SoknadPanel = ({ lenke, sykmelding, soknad }: SoknadPanelProps) => {
    const perioderMedGraderingOgLengdeTekst = sykmelding.sykmelding.perioder.map(periode =>
        tilLesbarPeriodeMedGraderingOgArbeidsgiver(periode, sykmelding.sykmelding.arbeidsgiver),
    );
    // TODO: Få tak i info fra soknad.
    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel="Søknader om sykepenger"
            tekstGra={perioderMedGraderingOgLengdeTekst}
            tekstStatus={'Aktiveres 22.november 2019'}
            svg={bjorn}
            ikonbakgrunn="gul"
        />
    );
};

export default SoknadPanel;
