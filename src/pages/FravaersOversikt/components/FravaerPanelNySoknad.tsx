import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { hentAntallNyeSoknader } from './panelUtils';

const hentTekstInnhold = (antallNyeSoknader: number) => {
    return `${antallNyeSoknader} ${antallNyeSoknader > 1 ? 'søknader' : 'søknad'} er klar${antallNyeSoknader > 1 &&
        'e'} til utfylling`;
};

interface FravaerPanelNySoknadProps {
    lenke: string;
    sykefravaer: Sykefravaer;
    tilFraDatoStreng: string;
}

const FravaerPanelNySoknad = ({ lenke, sykefravaer, tilFraDatoStreng }: FravaerPanelNySoknadProps) => {
    const antallNyeSoknader = hentAntallNyeSoknader(sykefravaer);

    const tekst = hentTekstInnhold(antallNyeSoknader);

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

export default FravaerPanelNySoknad;
