import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { hentAntallNyeSykmeldinger } from './panelUtils';

const hentTekstInnhold = (antallNyeSykmeldinger: number) => {
    return `${antallNyeSykmeldinger} ${
        antallNyeSykmeldinger > 1 ? 'sykmeldinger' : 'sykmelding'
    } må bekreftes og sendes til arbeidsgiver/NAV`;
};

interface FravaerPanelNySykmeldingProps {
    lenke: string;
    sykefravaer: Sykefravaer;
    tilFraDatoStreng: string;
}

const FravaerPanelNySykmelding = ({ lenke, sykefravaer, tilFraDatoStreng }: FravaerPanelNySykmeldingProps) => {
    const antallNyeSykmeldinger = hentAntallNyeSykmeldinger(sykefravaer);

    const tekst = hentTekstInnhold(antallNyeSykmeldinger);

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

export default FravaerPanelNySykmelding;
