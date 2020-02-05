import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Kategori from '../../components/Kategori';
import SykefravaerPanel from './components/SykefravaerPanel';
import Tittel from '../../components/Tittel/Tittel';
import setDocumentTittel from '../../utils/setDocumentTittel';
import Brodsmuler, { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';
import {
    useSykefravaerFerdigBehandlet,
    useSykefravaerMedNyeSykmeldingerEllerAktiveSoknader,
} from '../../store/selectAppStore';

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

    const nyeSykefravaer = useSykefravaerMedNyeSykmeldingerEllerAktiveSoknader();
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

                <Tittel tittel="Dine sykefravær" undertittel="Oversikt over aktive- og tidligere sykefravær" />

                <Kategori tittel={'Nye varslinger'}>
                    {nyeSykefravaer.map(fravaer => (
                        <SykefravaerPanel key={fravaer.id} lenke={`${pathname}/${fravaer.id}`} sykefravaer={fravaer} />
                    ))}
                </Kategori>
                <Kategori
                    tittel="Ferdig behandlet"
                    settSortering={(sortering: string) =>
                        console.log('TODO: Implementer sortering av ferdig behandlede søknader:', sortering)
                    }
                >
                    {ferdigeSykefravaer.map(fravaer => (
                        <SykefravaerPanel key={fravaer.id} lenke={`${pathname}/${fravaer.id}`} sykefravaer={fravaer} />
                    ))}
                </Kategori>
            </div>
        </>
    );
};

export default FravaersOversikt;
