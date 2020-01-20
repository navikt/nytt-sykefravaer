import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { hentSykefravaerTilFraDatoStreng, tilLesbarDato } from './panelUtils';

interface PagaendeFravaerPanelProps {
    lenke: string;
    sykefravaer: Sykefravaer;
}

const PagaendeFravaerPanel = ({ lenke, sykefravaer }: PagaendeFravaerPanelProps) => {
    const tilFraDatoStreng = hentSykefravaerTilFraDatoStreng(sykefravaer);

    // TODO: Hent dato fra sykmelding
    const sykmeldingBekreftetDato = tilLesbarDato(new Date());
    // TODO: Hent dato fra søknad
    const soknadAktiveresDato = tilLesbarDato(new Date());

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={tilFraDatoStreng}
            tekstGra={`Sykmelding ble sendt til arbeidsgiver ${sykmeldingBekreftetDato}`}
            tekstStatus={`Søknad om sykepenger aktiveres ${soknadAktiveresDato}.`}
            svg={bjorn}
        />
    );
};

export default PagaendeFravaerPanel;
