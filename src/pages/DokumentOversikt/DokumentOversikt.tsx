import './dokumentOversikt.less';

import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Brodsmuler from '../../components/Brodsmuler/Brodsmuler';
import Header from '../../components/Header/Header';
import Kategori from '../../components/Kategori';
import SoknadPanel from './components/SoknadPanel';
import Statuspanel from './components/statuspanel/Statuspanel';
import SykmeldingPanel from './components/SykmeldingPanel';
import Tittel from '../../components/Tittel/Tittel';
import setDocumentTittel from '../../utils/setDocumentTittel';
import { useSoknader } from '../../hooks/useSoknader';
import { useSykmeldinger } from '../../hooks/useSykmeldinger';

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
            tittel: 'Sykefravær',
            sti: '/',
            erKlikkbar: true,
        },
        {
            tittel: 'Oversikt',
            sti: '/fravaer',
            erKlikkbar: true,
        },
        {
            tittel: 'Status',
            sti: `/${id}`,
            erKlikkbar: true,
        },
    ];
};

const DokumentOversikt = () => {
    setDocumentTittel(SIDETITTEL);

    const { fravaerId } = useParams();
    const { pathname } = useLocation();

    const { nyeSykmeldinger, ferdigBehandledeSykmeldinger } = useSykmeldinger(fravaerId);
    const { aktiveSoknader } = useSoknader(fravaerId);

    if (!fravaerId) {
        return null;
    }

    const brodsmuler = getBrodsmuler(fravaerId);

    // TODO: Sett opp logikk for visning av veileder
    // const veileder = getVeileder(sykefravaer);

    // TODO: Sett opp hvilken tekst som skal vises i utvidbar


    const hentSykmeldingLenke = (sykmeldingId: string) => {
        if (!process.env.REACT_APP_SOLO) {
            return `${process.env.REACT_APP_SYKMELDINGER_URL}/fravaer/${fravaerId}/${sykmeldingId}`;
        }
        return `${pathname}/${sykmeldingId}`;
    };

    return (
        <>
            <Header location={SIDETITTEL} />
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />
                <Tittel
                    tittel="Sykefravær"
                    undertittel={`fra ${new Date().toDateString()} til ${new Date().toDateString()}`}
                />
            </div>
            <Statuspanel />
            <div className="limit">
                {nyeSykmeldinger.length > 0 && (
                    <Kategori tittel={'Nye varslinger'}>
                        {nyeSykmeldinger.map(sykmeldingData => {
                            const lenke = hentSykmeldingLenke(sykmeldingData.sykmelding.id);
                            return (
                                <SykmeldingPanel
                                    key={sykmeldingData.sykmelding.id}
                                    lenke={lenke}
                                    ekstern={!!process.env.REACT_APP_SYKMELDINGER_URL}
                                    sykmeldingData={sykmeldingData}
                                />
                            );
                        })}
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
                {ferdigBehandledeSykmeldinger.length > 0 && (
                    <Kategori tittel={'Ferdig behandlet'}>
                        {ferdigBehandledeSykmeldinger.map(sykmeldingData => {
                            const lenke = hentSykmeldingLenke(sykmeldingData.sykmelding.id);
                            return (
                                <SykmeldingPanel
                                    key={sykmeldingData.sykmelding.id}
                                    lenke={lenke}
                                    ekstern={!!process.env.REACT_APP_SYKMELDINGER_URL}
                                    sykmeldingData={sykmeldingData}
                                />
                            );
                        })}
                    </Kategori>
                )}
            </div>
        </>
    );
};

export default DokumentOversikt;
