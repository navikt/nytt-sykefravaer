import React from 'react';
import { Sidetittel, Undertittel } from 'nav-frontend-typografi';
import { useLocation } from 'react-router-dom';

import BehandledeFravaerPanel from './components/BehandledeFravaerPanel';
import Header from '../../components/Header/Header';
import Kategori from '../../components/Kategori';
import SykmeldingPanel from './components/SykefravaerPanel';
import setDocumentTittel from '../../utils/setDocumentTittel';
import useAppStore from '../../store/useAppStore';
import Brodsmuler, { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';

const SIDETITTEL = 'Fraværsoversikt';

const brodsmuler: Brodsmule[] = [
    {
        tittel: 'Ditt sykefravaer',
        sti: '/',
        erKlikkbar: true,
    },
    {
        tittel: SIDETITTEL,
        sti: '/',
        erKlikkbar: true,
    },
];

const FravaersOversikt = () => {
    setDocumentTittel(SIDETITTEL);

    const { sykefravaer } = useAppStore();
    const { pathname } = useLocation();

    console.log(sykefravaer);

    // TODO: Erstatt dette med en fornuftig visning for ingen sykefravaer
    if (!sykefravaer) {
        return <div>Ingen sykefravaer</div>;
    }

    return (
        <>
            <Header location={SIDETITTEL} />
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />
                <Sidetittel style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '2rem' }}>
                    Dine sykefravær
                </Sidetittel>
                <Undertittel style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    Oversikt over aktive- og tidligere sykefravær
                </Undertittel>
                <Kategori tittel={'Nye varsler'}>
                    {sykefravaer.map(fravaer => (
                        <SykmeldingPanel
                            key={fravaer.id}
                            lenke={`${pathname}/${fravaer.id}`}
                            antallNyeSykmeldinger={fravaer.sykmeldinger.length}
                            periodeFra={new Date()}
                            periodeTil={new Date()}
                        />
                    ))}
                </Kategori>
                <Kategori tittel={'Pågående sykefravær'}>
                    {sykefravaer.map(fravaer => (
                        <SykmeldingPanel
                            key={fravaer.id}
                            lenke={`${pathname}/${fravaer.id}`}
                            antallNyeSykmeldinger={fravaer.sykmeldinger.length}
                            periodeFra={new Date()}
                            periodeTil={new Date()}
                        />
                    ))}
                </Kategori>
                <Kategori tittel="Ferdig behandlet">
                    <BehandledeFravaerPanel lenke="test" antallSykefravær={3} />
                </Kategori>
            </div>
        </>
    );
};

export default FravaersOversikt;
