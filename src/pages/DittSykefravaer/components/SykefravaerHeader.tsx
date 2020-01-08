import './SykefravaerHeader.less';

import React from 'react';
import { Sidetittel } from 'nav-frontend-typografi';

import konsultasjon from '../../../svg/konsultasjon.svg';
import Brodsmuler, { Brodsmule } from '../../../components/Brodsmuler/Brodsmuler';

const SykefravaerHeader = ({ brodsmuler }: { brodsmuler: Brodsmule[] }) => {
    return (
        <div className="sykefravaer-header">
            <div className="sykefravaer-header__container">
                <Brodsmuler brodsmuler={brodsmuler} />
                <Sidetittel className="sykefravaer-header__tekst">Ditt sykefravær</Sidetittel>
                <img className="sykefravaer-header__image" src={konsultasjon} alt="Konsultasjon" />
            </div>
        </div>
    );
};

export default SykefravaerHeader;
