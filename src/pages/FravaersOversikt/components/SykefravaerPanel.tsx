import React from 'react';

import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Beslutning } from '../../../types/soknadTypes';
import { StatusTyper } from '../../../types/sykmeldingTypes';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import { hentSykefravaerTilFraDatoStreng } from './panelUtils';

interface SykefravaerPanelProps {
    lenke: string;
    sykefravaer: Sykefravaer;
}

const SykefravaerPanel = ({ lenke, sykefravaer }: SykefravaerPanelProps) => {
    const tilFraDatoStreng = hentSykefravaerTilFraDatoStreng(sykefravaer);

    const antallUbehandledeSykmeldinger = sykefravaer.sykmeldinger.filter(
        sykmelding => sykmelding.status.status === StatusTyper.NY,
    ).length;
    // TODO: Antall søknader er ubrukt
    const antallUbehandledeSoknader = sykefravaer.soknader.filter(
        soknad => soknad.beslutning === Beslutning.AVVIST || soknad.beslutning === Beslutning.AKTIV,
    ).length;

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={tilFraDatoStreng}
            tekstGra={`${antallUbehandledeSykmeldinger} ${
                antallUbehandledeSykmeldinger > 1 ? 'nye sykmeldinger' : 'ny sykmelding'
            } må bekreftes og sendes til arbeidsgiver/NAV`}
            ikonbakgrunn="gul"
            svg={bjorn}
        />
    );
};

export default SykefravaerPanel;
