import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { tilLesbarDato } from './panelUtils';

interface FravaerPanelFremtidigSoknadProps {
    lenke: string;
    sykefravaer: Sykefravaer;
    tilFraDatoStreng: string;
}

const FravaerPanelFremtidigSoknad = ({ lenke, sykefravaer, tilFraDatoStreng }: FravaerPanelFremtidigSoknadProps) => {
    // TODO: Hent riktig aktiveringsdato
    const tekst = `Søknad aktiveres ${tilLesbarDato(new Date())}`;

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={`Sykmeldt fra ${tilFraDatoStreng}`}
            tekstGra={tekst}
            ikonbakgrunn="gul"
            svg={bjorn}
        />
    );
};

export default FravaerPanelFremtidigSoknad;
