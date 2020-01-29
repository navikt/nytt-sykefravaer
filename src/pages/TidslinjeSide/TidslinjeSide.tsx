import './TidslinjeSide.less';

import Hjelpetekst from 'nav-frontend-hjelpetekst';
import Tekstomrade from 'nav-frontend-tekstomrade';
import React, { useState } from 'react';
import { Radio } from 'nav-frontend-skjema';

import Header from '../../components/Header/Header';
import TidslinjeMedArbeidsgiver from './TidslinjeMedArbeidsgiver';
import TidslinjeUtenArbeidsgiver from './TidslinjeUtenArbeidsgiver';
import Tittel from '../../components/Tittel/Tittel';
import setDocumentTittel from '../../utils/setDocumentTittel';
import Brodsmuler, { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';

const SIDETITTEL = 'Hva skjer under sykefraværet?';

const brodsmuler: Brodsmule[] = [
    {
        tittel: 'Sykefravær',
        sti: '/',
        erKlikkbar: true,
    },
    {
        tittel: 'Tidslinje',
        sti: '/tidslinje',
        erKlikkbar: false,
    },
];

const TidslinjeSide = () => {
    setDocumentTittel('Tidslinjen');

    const [harArbeidsgiver, setHarArbeidsgiver] = useState(true);

    const radioEndring = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value === 'med-arbeidsgiver') {
            setHarArbeidsgiver(true);
        } else if (e.target.value === 'uten-arbeidsgiver') {
            setHarArbeidsgiver(false);
        }
    };

    return (
        <>
            <Header location={SIDETITTEL} />
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler}></Brodsmuler>

                <Tittel tittel="Hva skjer under sykefraværet?" />

                <Tekstomrade className="infoheader">
                    På tidslinjen ser du hva som forventes av deg i løpet av sykefraværet. Oppgavene kan gjøres på andre
                    tidspunkter hvis det er behov for det. Hvis du er for syk til å delta i jobb eller aktivitet, kan du
                    få unntak fra enkelte av oppgavene
                </Tekstomrade>
                <div className="arbeidssituasjon">
                    <Radio
                        label={'Jeg har arbeidsgiver'}
                        name="arbeidssituasjon"
                        value="med-arbeidsgiver"
                        checked={harArbeidsgiver}
                        onChange={radioEndring}
                        className="arbeidssituasjon__med-arbeidsgiver"
                    />
                    <Radio
                        label={
                            <div className="arbeidssituasjon__uten-arbeidsgiver-label">
                                Jeg har ikke arbeidsgiver
                                <Hjelpetekst className="arbeidssituasjon__hjelpetekst">
                                    Velg «Jeg har ikke arbeidsgiver» dersom du er for eks. selvstendig næringsdrivende,
                                    frilanser eller arbeidsledig.
                                </Hjelpetekst>
                            </div>
                        }
                        name="arbeidssituasjon"
                        value="uten-arbeidsgiver"
                        onChange={radioEndring}
                        checked={!harArbeidsgiver}
                    />
                </div>
                <span className="tidslinje">
                    {harArbeidsgiver ? <TidslinjeMedArbeidsgiver /> : <TidslinjeUtenArbeidsgiver />}
                </span>
            </div>
        </>
    );
};

export default TidslinjeSide;
