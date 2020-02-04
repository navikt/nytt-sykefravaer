import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import {
    hentAntallFremtidigeSoknader,
    hentAntallNyeSoknader,
    hentAntallNyeSykmeldinger,
    hentSykefravaerTilFraDatoStreng,
    tilLesbarDato,
} from './panelUtils';

interface SykefravaerPanelProps {
    lenke: string;
    sykefravaer: Sykefravaer;
}

const hentTekstInnhold = (antallNyeSykmeldinger: number, antallNyeSoknader: number) => {
    if (antallNyeSykmeldinger > 0 && antallNyeSoknader > 0) {
        return `${antallNyeSykmeldinger} ${
            antallNyeSykmeldinger > 1 ? 'sykmeldinger' : 'sykmelding'
        } og ${antallNyeSoknader} ${antallNyeSoknader > 1 ? 'søknader' : 'søknad'} er klare til utfylling`;
    }

    if (antallNyeSykmeldinger > 0) {
        return `${antallNyeSykmeldinger} ${
            antallNyeSykmeldinger > 1 ? 'sykmeldinger' : 'sykmelding'
        } må bekreftes og sendes til arbeidsgiver/NAV`;
    }

    if (antallNyeSoknader > 0) {
        return `${antallNyeSoknader} ${antallNyeSoknader > 1 ? 'søknader' : 'søknad'} er klar${antallNyeSoknader > 1 &&
            'e'} til utfylling`;
    }

    // TODO: Default melding for sykefravær
    return `Sykmelding ble sendt til arbeidsgiver ${tilLesbarDato(new Date())}`;
};

const hentStatusInnhold = (antallFremtidigeSoknader: number) => {
    if (antallFremtidigeSoknader > 0) {
        return `Søknad om sykepenger aktiveres ${tilLesbarDato(new Date())}`;
    }

    return '';
};

const SykefravaerPanel = ({ lenke, sykefravaer }: SykefravaerPanelProps) => {
    const tilFraDatoStreng = hentSykefravaerTilFraDatoStreng(sykefravaer);

    const antallNyeSykmeldinger = hentAntallNyeSykmeldinger(sykefravaer);
    const antallNyeSoknader = hentAntallNyeSoknader(sykefravaer);
    const antallFremtidigeSoknader = hentAntallFremtidigeSoknader(sykefravaer);

    const tekst = hentTekstInnhold(antallNyeSykmeldinger, antallNyeSoknader);
    const status = hentStatusInnhold(antallFremtidigeSoknader);

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={tilFraDatoStreng}
            tekstGra={tekst}
            tekstStatus={status}
            ikonbakgrunn="gul"
            svg={bjorn}
        />
    );
};

export default SykefravaerPanel;
