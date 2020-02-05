import './Veileder.less';

import Lenke from 'nav-frontend-lenker';
import React from 'react';
import Veilederpanel from 'nav-frontend-veilederpanel';
import { Element } from 'nav-frontend-typografi';

import Bjorn from './Bjorn.svg';
import { useSykefravaerMedNyeVarsler } from '../../store/selectAppStore';

type StemningTypes = 'glad' | 'noytral';

const hentSvg = (stemning: StemningTypes) => {
    if (stemning === 'glad') {
        return Bjorn;
    }

    // TODO: Nøytral Bjorn
    if (stemning === 'noytral') {
        return Bjorn;
    }

    return Bjorn;
};

const Veileder = () => {
    // TODO: Kun vis veileder dersom kriterier er oppfylt.
    /*
    vis veileder dersom det finnes et fravær med en fremtidig søknad
    */
    const nyeVarsler = useSykefravaerMedNyeVarsler();

    /*
    hent sykefravaer med nye varsler
    hent nyeste fravaer i listen
    sjekk at fraværet har en fremtidig søknad
    sjekk at fraværet har ingen nye sykmeldinger
    */

    const stemning = 'glad';
    const innhold = (
        <div>
            <Element>Sykmeldingen er nå sendt til ARBEIDSGIVER/NAV</Element>
            <p>
                Søknad om sykepenger aktiveres DATO.
                <br />
                <Lenke href="http://www.nrk.no">
                    Klikk her for å finne ut mer om hvorfor du må vente med søknaden.
                </Lenke>
            </p>
            <p>
                Ønsker du kontakt med en veileder eller lage en oppfølgingsplan med arbeidsplassen din? Alt dette samt
                mye mer kan du finne under.
            </p>
        </div>
    );
    const svg = hentSvg(stemning);
    return (
        <div className="veileder-container">
            <Veilederpanel kompakt fargetema="advarsel" svg={<img src={svg} alt="NAV Veileder" />}>
                {innhold}
            </Veilederpanel>
        </div>
    );
};

export default Veileder;
