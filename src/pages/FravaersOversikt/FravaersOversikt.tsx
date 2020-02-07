import React from 'react';
import { useLocation } from 'react-router-dom';

import BehandledeFravaerPanel from './components/BehandledeFravaerPanel';
import Header from '../../components/Header/Header';
import Kategori from '../../components/Kategori';
import PagaendeFravaerPanel from './components/PagaendeFravaerPanel';
import SykefravaerPanel from './components/SykefravaerPanel';
import Tittel from '../../components/Tittel/Tittel';
import setDocumentTittel from '../../utils/setDocumentTittel';
import Brodsmuler, { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';
import { useSykefravaer } from '../../hooks/useSykefravaer';

const SIDETITTEL = 'Fraværsoversikt';

const brodsmuler: Brodsmule[] = [
    {
        tittel: 'Sykefravær',
        sti: '/',
        erKlikkbar: true,
    },
    {
        tittel: 'Oversikt',
        sti: '/',
        erKlikkbar: true,
    },
];

const FravaersOversikt = () => {
    setDocumentTittel(SIDETITTEL);

    const {
        sykefravaerMedNyeSykemeldingerEllerAktiveSoknader,
        sykefravaerPagaende,
        sykefravaerFerdigBehandlet,
        setSorteringForFerdigBehandletSykefravaer,
    } = useSykefravaer();
    const { pathname } = useLocation();

    // TODO: Erstatt dette med en fornuftig visning for ingen sykefravaer
    if (!sykefravaerMedNyeSykemeldingerEllerAktiveSoknader || !sykefravaerPagaende || !sykefravaerFerdigBehandlet) {
        return <div>Ingen sykefravaer</div>;
    }

    return (
        <>
            <Header location={SIDETITTEL} />
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />

                <Tittel tittel="Dine sykefravær" undertittel="Oversikt over pågående- og tidligere sykefravær" />

                <Kategori tittel={'Nye varslinger'}>
                    {sykefravaerMedNyeSykemeldingerEllerAktiveSoknader.map(fravaer => (
                        <SykefravaerPanel key={fravaer.id} lenke={`${pathname}/${fravaer.id}`} sykefravaer={fravaer} />
                    ))}
                </Kategori>
                <Kategori tittel={'Pågående sykefravær'}>
                    {sykefravaerPagaende.map(fravaer => (
                        <PagaendeFravaerPanel
                            key={fravaer.id}
                            lenke={`${pathname}/${fravaer.id}`}
                            sykefravaer={fravaer}
                        />
                    ))}
                </Kategori>
                <Kategori
                    tittel="Ferdig behandlet"
                    settSortering={sortering => {
                        setSorteringForFerdigBehandletSykefravaer(sortering);
                    }}
                >
                    {sykefravaerFerdigBehandlet.map(fravaer => (
                        <BehandledeFravaerPanel
                            key={fravaer.id}
                            lenke={`${pathname}/${fravaer.id}`}
                            sykefravaer={fravaer}
                        />
                    ))}
                </Kategori>
            </div>
        </>
    );
};

export default FravaersOversikt;
