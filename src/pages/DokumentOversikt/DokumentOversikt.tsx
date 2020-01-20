import './dokumentOversikt.less';

import React from 'react';
import { Sidetittel, Undertittel } from 'nav-frontend-typografi';
import { useLocation, useParams } from 'react-router-dom';

import Brodsmuler from '../../components/Brodsmuler/Brodsmuler';
import Header from '../../components/Header/Header';
import Kategori from '../../components/Kategori';
import SoknadPanel from './components/SoknadPanel';
import SykmeldingPanel from './components/SykmeldingPanel';
import setDocumentTittel from '../../utils/setDocumentTittel';
import {
    useAktiveSoknaderFraSykefravaer,
    useFerdigBehandledeSykmeldingerFraSykefravaer,
    useNyeSykmeldingerFraSykefravaer,
} from '../../store/selectAppStore';

const SIDETITTEL = 'Status i sykefravær';

/* TODO: Sett opp logikk for visning av veileder
const getVeileder = (sykefravaer: Sykefravaer) => {
    return (
        <Veileder
            innhold={
                <>
                    <Element>Sykmeldingen er nå sendt til Firma1/NAV.</Element>
                    <p>Søknad om sykepenger aktiveres 22. november.</p>
                    <p></p>
                </>
            }
            stemning="glad"
            onClick={() => {}}
            knappTekst="Til sykmelding"
        />
    );
};
*/

const getBrodsmuler = (id: string) => {
    return [
        {
            tittel: 'Ditt sykefravaer',
            sti: '/',
            erKlikkbar: true,
        },
        {
            tittel: 'Fraværsoversikt',
            sti: '/fravaer',
            erKlikkbar: true,
        },
        {
            tittel: SIDETITTEL,
            sti: `/${id}`,
            erKlikkbar: true,
        },
    ];
};

const DokumentOversikt = () => {
    setDocumentTittel(SIDETITTEL);

    const { fravaerId } = useParams();
    const { pathname } = useLocation();

    const nyeSykmeldinger = useNyeSykmeldingerFraSykefravaer(fravaerId);
    const ferdigeSykmeldinger = useFerdigBehandledeSykmeldingerFraSykefravaer(fravaerId);
    // const inaktiveSoknader = useInaktiveSoknaderFraSykefravaer(fravaerId);
    const aktiveSoknader = useAktiveSoknaderFraSykefravaer(fravaerId);

    if (!fravaerId) {
        return null;
    }

    const brodsmuler = getBrodsmuler(fravaerId);

    // TODO: Sett opp logikk for visning av veileder
    // const veileder = getVeileder(sykefravaer);

    // TODO: Hent dato fra sykefravær
    return (
        <>
            <Header location={SIDETITTEL} />
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />
                <Sidetittel style={{ textAlign: 'center', marginBottom: '1rem' }}>Sykefravær</Sidetittel>
                <Undertittel style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    fra {new Date().toDateString()} til {new Date().toDateString()}
                </Undertittel>

                {nyeSykmeldinger.length > 0 && (
                    <Kategori tittel={'Nye varslinger'}>
                        {nyeSykmeldinger.map(sykmeldingData => (
                            <SykmeldingPanel
                                key={sykmeldingData.sykmelding.id}
                                lenke={`${pathname}/${sykmeldingData.sykmelding.id}`}
                                sykmeldingData={sykmeldingData}
                            />
                        ))}
                    </Kategori>
                )}
                {nyeSykmeldinger.length > 0 && (
                    <Kategori tittel={'Nye varslinger'}>
                        {aktiveSoknader.map(soknad => (
                            <SoknadPanel
                                key={soknad.id}
                                lenke={`${pathname}/${soknad.sykmeldingId}/soknad`}
                                soknad={soknad}
                            />
                        ))}
                    </Kategori>
                )}
                {ferdigeSykmeldinger.length > 0 && (
                    <Kategori tittel={'Ferdig behandlet'}>
                        {ferdigeSykmeldinger.map(sykmeldingData => (
                            <SykmeldingPanel
                                key={sykmeldingData.sykmelding.id}
                                lenke={`${pathname}/${sykmeldingData.sykmelding.id}`}
                                sykmeldingData={sykmeldingData}
                            />
                        ))}
                    </Kategori>
                )}
            </div>
        </>
    );
};

export default DokumentOversikt;
