import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { hentAntallNyeSoknader, hentAntallNyeSykmeldinger } from './panelUtils';

const hentTekstInnhold = (antallNyeSykmeldinger: number, antallNyeSoknader: number) => {
    return `${antallNyeSykmeldinger} ${
        antallNyeSykmeldinger > 1 ? 'sykmeldinger' : 'sykmelding'
    } og ${antallNyeSoknader} ${antallNyeSoknader > 1 ? 'søknader' : 'søknad'} er klare til utfylling`;
};

interface FravaerPanelNySykmeldingProps {
    lenke: string;
    sykefravaer: Sykefravaer;
    tilFraDatoStreng: string;
}

const FravaerPanelNySykmelding = ({ lenke, sykefravaer, tilFraDatoStreng }: FravaerPanelNySykmeldingProps) => {
    const antallNyeSykmeldinger = hentAntallNyeSykmeldinger(sykefravaer);
    const antallNyeSoknader = hentAntallNyeSoknader(sykefravaer);

    const tekst = hentTekstInnhold(antallNyeSykmeldinger, antallNyeSoknader);

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
