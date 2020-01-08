import React from 'react';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';
// import { tilLesbarPeriodeMedGraderingOgArbeidsgiver } from '../../../utils/periodeUtils';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Soknad } from '../../../types/soknadTypes';

interface SoknadPanelProps {
    lenke: string;
    sykmeldinger: SykmeldingData[];
    soknader: Soknad[]; // TODO: endres fra optional til mandatory
}

const SoknadPanel = ({ lenke, sykmeldinger, soknader }: SoknadPanelProps) => {
    /*
    const perioderMedGraderingOgLengdeTekst = sykmelding.sykmelding.perioder.map(periode =>
        tilLesbarPeriodeMedGraderingOgArbeidsgiver(periode, sykmelding.sykmelding.arbeidsgiver),
    );
    */
    // TODO: Få tak i info fra soknad.
    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel="Søknader om sykepenger"
            tekstGra={'undertekst'}
            tekstStatus={'Aktiveres 22.november 2019'}
            svg={bjorn}
            ikonbakgrunn="gul"
        />
    );
};

export default SoknadPanel;
