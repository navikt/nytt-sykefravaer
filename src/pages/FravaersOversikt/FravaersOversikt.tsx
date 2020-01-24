import React from 'react';
import { Sidetittel, Undertittel } from 'nav-frontend-typografi';
import { useLocation } from 'react-router-dom';

import BehandledeFravaerPanel from './components/BehandledeFravaerPanel';
import Header from '../../components/Header/Header';
import Kategori from '../../components/Kategori';
import PagaendeFravaerPanel from './components/PagaendeFravaerPanel';
import SykefravaerPanel from './components/SykefravaerPanel';
import setDocumentTittel from '../../utils/setDocumentTittel';
import Brodsmuler, { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';
import {
    useSykefravaerFerdigBehandlet,
    useSykefravaerMedNyeSykmeldingerEllerAktiveSoknader,
    useSykefravaerPagaende,
} from '../../store/selectAppStore';

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

    const nyeSykefravaer = useSykefravaerMedNyeSykmeldingerEllerAktiveSoknader();
    const pagaendeSykefravaer = useSykefravaerPagaende();
    const ferdigeSykefravaer = useSykefravaerFerdigBehandlet();
    const { pathname } = useLocation();

    // TODO: Erstatt dette med en fornuftig visning for ingen sykefravaer
    if (!nyeSykefravaer) {
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
                    Oversikt over pågående- og tidligere sykefravær
                </Undertittel>
                <Kategori tittel={'Nye varslinger'}>
                    {nyeSykefravaer.map(fravaer => (
                        <SykefravaerPanel key={fravaer.id} lenke={`${pathname}/${fravaer.id}`} sykefravaer={fravaer} />
                    ))}
                </Kategori>
                <Kategori tittel={'Pågående sykefravær'}>
                    {pagaendeSykefravaer.map(fravaer => (
                        <PagaendeFravaerPanel
                            key={fravaer.id}
                            lenke={`${pathname}/${fravaer.id}`}
                            sykefravaer={fravaer}
                        />
                    ))}
                </Kategori>
                <Kategori
                    tittel="Ferdig behandlet"
                    settSortering={(sortering: string) =>
                        console.log('TODO: Implementer sortering av ferdig behandlede søknader:', sortering)
                    }
                >
                    {ferdigeSykefravaer.map(fravaer => (
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
