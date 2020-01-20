import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { hentSykefravaerTilFraDatoStreng, tilLesbarDato } from './panelUtils';

interface BehandledeFravaerPanelProps {
    lenke: string;
    sykefravaer: Sykefravaer;
}

const BehandledeFravaerPanel = ({ lenke, sykefravaer }: BehandledeFravaerPanelProps) => {
    const tilFraDatoStreng = hentSykefravaerTilFraDatoStreng(sykefravaer);

    // TODO: Hent dato fra søknad
    const soknadsDato = tilLesbarDato(new Date());

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={tilFraDatoStreng}
            tekstGra={`Søknad ble behandlet ${soknadsDato}`}
            svg={bjorn}
        />
    );
};

export default BehandledeFravaerPanel;
