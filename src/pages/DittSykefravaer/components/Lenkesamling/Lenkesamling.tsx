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
        <div className="lenkesamling__lenkeelement">
            <Lenke className="lenkesamling__lenke" href={lenke}>
                <span>{tekst}</span>
                {ekstern && <ExternalLink className="lenkesamling__svg" />}
            </Lenke>
        </div>
    );
};

const Lenkesamling = () => {
    return (
        <>
            <OverskriftSkille tekst="Relatert informasjon" />
            <nav className="lenkesamling">
                <LenkeElement tekst="Digital sykmelding" lenke="https://www.nrk.no/" ekstern />
                <LenkeElement tekst="Ofte stilte spørsmål" lenke="https://www.nrk.no/" ekstern />
                <LenkeElement tekst="Opphold i utlandet" lenke="opphold" />
                <LenkeElement tekst="Begrepsforklaring" lenke="begrep" />
                <LenkeElement tekst="Syk i svangerskapsperioden" lenke="syk" />
                <LenkeElement tekst="Regelverk" lenke="regelverk" />
                <LenkeElement tekst="Annen informasjon" lenke="https://www.nrk.no/" ekstern />
                <LenkeElement tekst="Overgang til AAP" lenke="overgang" />
                <LenkeElement tekst="Slik klager du" lenke="https://www.nrk.no/" ekstern />
            </nav>
        </>
    );
};

export default Lenkesamling;
