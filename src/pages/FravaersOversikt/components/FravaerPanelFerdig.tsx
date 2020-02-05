import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { tilLesbarDato } from './panelUtils';

interface FravaerPanelNySoknadProps {
    lenke: string;
    sykefravaer: Sykefravaer;
    tilFraDatoStreng: string;
}

const FravaerPanelNySoknad = ({ lenke, sykefravaer, tilFraDatoStreng }: FravaerPanelNySoknadProps) => {
    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={`Sykefravær fra ${tilFraDatoStreng}`}
            tekstGra={`Sykepenger ble utbetalt ${tilLesbarDato(new Date())}`}
            svg={bjorn}
        />
    );
};

export default FravaerPanelNySoknad;
