import './Lenkesamling.less';

import Lenke from 'nav-frontend-lenker';
import React from 'react';

import ExternalLink from '../../../../svg/ExternalLink';
import OverskriftSkille from '../../../../components/OverskriftSkille/OverskriftSkille';

interface LenkeElementProps {
    tekst: string;
    lenke: string;
    ekstern?: boolean;
}

const LenkeElement = ({ tekst, lenke, ekstern }: LenkeElementProps) => {
    return (
        <Lenke className="lenkesamling__lenkeelement" href={lenke}>
            <span>{tekst}</span>
            {ekstern ?? <ExternalLink />}
        </Lenke>
    );
};

const Lenkesamling = () => {
    return (
        <>
            <OverskriftSkille tekst="Relatert informasjon" />
            <div className="lenkesamling-container">
                <LenkeElement tekst="Digital sykmelding" lenke="www.nrk.no" ekstern />
                <LenkeElement tekst="Ofte stilte spørsmål" lenke="www.nrk.no" ekstern />
                <LenkeElement tekst="Opphold i utlandet" lenke="www.nav.no" />
                <LenkeElement tekst="Begrepsforklaring" lenke="www.nav.no" />
                <LenkeElement tekst="Syk i svangerskapsperioden" lenke="www.nav.no" />
                <LenkeElement tekst="Regelverk" lenke="www.nav.no" />
                <LenkeElement tekst="Annen informasjon" lenke="www.nrk.no" ekstern />
                <LenkeElement tekst="Overgang til AAP" lenke="www.nav.no" />
                <LenkeElement tekst="Slik klager du" lenke="www.nrk.no" ekstern />
            </div>
        </>
    );
};

export default Lenkesamling;
