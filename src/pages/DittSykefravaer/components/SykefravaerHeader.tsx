import './SykefravaerHeader.less';

import React from 'react';
import { Sidetittel } from 'nav-frontend-typografi';

import konsultasjon from '../../../svg/konsultasjon.svg';
import Brodsmuler, { Brodsmule } from '../../../components/Brodsmuler/Brodsmuler';

const SykefravaerHeader = ({ brodsmuler }: { brodsmuler: Brodsmule[] }) => {
    return (
        <div className="sykefravaer-header">
            <div className="limit-short">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Brodsmuler brodsmuler={brodsmuler} />
                    <Sidetittel>Ditt sykefravær</Sidetittel>
                </div>
                <img className="sykefravaer-header__image" src={konsultasjon} alt="Konsultasjon" />
            </div>
        </div>
    );
};

export default SykefravaerHeader;
