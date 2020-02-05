import React from 'react';

import FravaerPanelFerdig from './FravaerPanelFerdig';
import FravaerPanelFremtidigSoknad from './FravaerPanelFremtidigSoknad';
import FravaerPanelMulti from './FravaerPanelMulti';
import FravaerPanelNySoknad from './FravaerPanelNySoknad';
import FravaerPanelNySykmelding from './FravaerPanelNySykmelding';
import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';
import { Sykefravaer } from '../../../types/sykefravaerTypes';
import {
    hentAntallFremtidigeSoknader,
    hentAntallNyeSoknader,
    hentAntallNyeSykmeldinger,
    hentSykefravaerTilFraDatoStreng,
} from './panelUtils';

interface SykefravaerPanelProps {
    lenke: string;
    sykefravaer: Sykefravaer;
}

const SykefravaerPanel = ({ lenke, sykefravaer }: SykefravaerPanelProps) => {
    const tilFraDatoStreng = hentSykefravaerTilFraDatoStreng(sykefravaer);

    const antallNyeSykmeldinger = hentAntallNyeSykmeldinger(sykefravaer);
    const antallNyeSoknader = hentAntallNyeSoknader(sykefravaer);
    const antallFremtidigeSoknader = hentAntallFremtidigeSoknader(sykefravaer);

    if (antallNyeSoknader > 0 && antallNyeSoknader > 0) {
        return <FravaerPanelMulti lenke={lenke} sykefravaer={sykefravaer} tilFraDatoStreng={tilFraDatoStreng} />;
    }

    if (antallNyeSykmeldinger > 0) {
        return <FravaerPanelNySykmelding lenke={lenke} sykefravaer={sykefravaer} tilFraDatoStreng={tilFraDatoStreng} />;
    }

    if (antallNyeSoknader > 0) {
        return <FravaerPanelNySoknad lenke={lenke} sykefravaer={sykefravaer} tilFraDatoStreng={tilFraDatoStreng} />;
    }

    if (antallFremtidigeSoknader > 0) {
        return (
            <FravaerPanelFremtidigSoknad lenke={lenke} sykefravaer={sykefravaer} tilFraDatoStreng={tilFraDatoStreng} />
        );
    }

    if (antallNyeSoknader === 0 && antallNyeSoknader === 0 && antallFremtidigeSoknader === 0) {
        return <FravaerPanelFerdig lenke={lenke} sykefravaer={sykefravaer} tilFraDatoStreng={tilFraDatoStreng} />;
    }

    /* // TODO:
    Refaktorer til å bruke boolean i stedet for antall.

    Kriterier:
    - har ny sykmelding og ny søknad
    - har ny sykmelding
    - har ny søknad
    - har fremtidig søknad
    - har godkjent søknad
    - har utbetalt søknad
    - default: ?
    */

    const tekst = 'Default tekst';
    const status = 'Default tekst';

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
