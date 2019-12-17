import React from 'react';
import Lenke from 'nav-frontend-lenker';

import OverskriftSkille from '../../../components/OverskriftSkille/OverskriftSkille';

import './RelatertInfo.less';

interface ItemProps {
    tekst: string;
}

const LenkeElement = ({ tekst }: ItemProps) => {
    return (
        <Lenke className="relatertinfo__lenkeelement" href="">
            {tekst}
        </Lenke>
    );
};

const RelatertInfo = () => {
    return (
        <>
            <OverskriftSkille tekst="Relatert informasjon" />
            <div className="relatertinfo-container">
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

export default RelatertInfo;
