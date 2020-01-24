import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import {
    fravaerHarAktivSoknad,
    fravaerHarNySykmelding,
    hentAntallAktiveSoknader,
    hentAntallNyeSykmeldinger,
    hentSykefravaerTilFraDatoStreng,
} from './panelUtils';

interface SykefravaerPanelProps {
    lenke: string;
    sykefravaer: Sykefravaer;
}

const hentTekstInnhold = (
    harNySykmelding: boolean,
    harAktivSoknad: boolean,
    antallUbehandledeSykmeldinger: number,
    antallUbehandledeSoknader: number,
) => {
    if (harNySykmelding && harAktivSoknad) {
        return `${antallUbehandledeSykmeldinger} ${
            antallUbehandledeSykmeldinger > 1 ? 'nye sykmeldinger' : 'ny sykmelding'
        } og ${antallUbehandledeSoknader} ${
            antallUbehandledeSoknader > 1 ? 'nye søknader' : 'ny søknad'
        } er klare til utfylling`;
    }

    if (harNySykmelding) {
        return `${antallUbehandledeSykmeldinger} ${
            antallUbehandledeSykmeldinger > 1 ? 'nye sykmeldinger' : 'ny sykmelding'
        } må bekreftes og sendes til arbeidsgiver/NAV`;
    }

    return `${antallUbehandledeSoknader} ${
        antallUbehandledeSoknader > 1 ? 'nye søknader' : 'ny søknad'
    } er klar${antallUbehandledeSoknader > 1 && 'e'} til utfylling`;
};

const SykefravaerPanel = ({ lenke, sykefravaer }: SykefravaerPanelProps) => {
    const tilFraDatoStreng = hentSykefravaerTilFraDatoStreng(sykefravaer);

    const harNySykmelding = fravaerHarNySykmelding(sykefravaer);
    const harAktivSoknad = fravaerHarAktivSoknad(sykefravaer);

    const antallUbehandledeSykmeldinger = hentAntallNyeSykmeldinger(sykefravaer);
    const antallUbehandledeSoknader = hentAntallAktiveSoknader(sykefravaer);

    const tekst = hentTekstInnhold(
        harNySykmelding,
        harAktivSoknad,
        antallUbehandledeSykmeldinger,
        antallUbehandledeSoknader,
    );

    return (
        <LenkepanelWrapper lenke={lenke} tittel={tilFraDatoStreng} tekstGra={tekst} ikonbakgrunn="gul" svg={bjorn} />
    );
};

export default SykefravaerPanel;
