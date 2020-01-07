import './TidslinjeSide.less';

import Hjelpetekst from 'nav-frontend-hjelpetekst';
import Tekstomrade from 'nav-frontend-tekstomrade';
import React, { useState } from 'react';
import { Radio } from 'nav-frontend-skjema';
import { Sidetittel } from 'nav-frontend-typografi';

import Header from '../../components/Header/Header';
import TidslinjeMedArbeidsgiver from './TidslinjeMedArbeidsgiver';
import TidslinjeUtenArbeidsgiver from './TidslinjeUtenArbeidsgiver';
import Brodsmuler, { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';

const SIDETITTEL = 'Hva skjer under sykefraværet?';

const brodsmuler: Brodsmule[] = [
    {
        tittel: 'Ditt sykefravaer',
        sti: '/',
        erKlikkbar: true,
    },
    {
        tittel: SIDETITTEL,
        sti: '/tidslinje',
        erKlikkbar: false,
    },
];

const TidslinjeSide = () => {
    document.title = 'Tidslinjen - www.nav.no';

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
                <Sidetittel className="sidetittel">Hva skjer under sykefraværet?</Sidetittel>
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
