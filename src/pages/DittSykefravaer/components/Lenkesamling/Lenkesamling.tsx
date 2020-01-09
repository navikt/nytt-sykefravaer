import './Lenkesamling.less';

import Lenke from 'nav-frontend-lenker';
import React from 'react';

import OverskriftSkille from '../../../../components/OverskriftSkille/OverskriftSkille';

interface ItemProps {
    tekst: string;
}

const LenkeElement = ({ tekst }: ItemProps) => {
    return (
        <Lenke className="lenkesamling__lenkeelement" href="">
            {tekst}
        </Lenke>
    );
};

const Lenkesamling = () => {
    return (
        <>
            <OverskriftSkille tekst="Relatert informasjon" />
            <div className="lenkesamling-container">
                <LenkeElement tekst="Digital sykmelding" />
                <LenkeElement tekst="Ofte stilte spørsmål" />
                <LenkeElement tekst="Opphold i utlandet" />
                <LenkeElement tekst="Begrepsforklaring" />
                <LenkeElement tekst="Syk i svangerskapsperioden" />
                <LenkeElement tekst="Regelverk" />
                <LenkeElement tekst="Annen informasjon" />
                <LenkeElement tekst="Overgang til AAP" />
                <LenkeElement tekst="Slik klager du" />
            </div>
        </>
    );
};

export default Lenkesamling;
