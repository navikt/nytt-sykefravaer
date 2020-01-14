import './dokumentOversikt.less';

import React from 'react';
import { Element, Sidetittel, Undertittel } from 'nav-frontend-typografi';
import { useLocation, useParams } from 'react-router-dom';

import BeslutningPanel from './components/BeslutningPanel';
import Brodsmuler from '../../components/Brodsmuler/Brodsmuler';
import Header from '../../components/Header/Header';
import Kategori from '../../components/Kategori';
import SoknadPanel from './components/SoknadPanel';
import SykmeldingPanel from './components/SykmeldingPanel';
import Veileder from '../../components/Veileder/Veileder';
import { StatusTyper } from '../../types/sykmeldingTypes';
import { Sykefravaer } from '../../types/sykefravaerTypes';
import { useSykefravaerFraId } from '../../store/selectAppStore';

const SIDETITTEL = 'Dokumentoversikt';

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
    document.title = `${SIDETITTEL} - www.nav.no`;

    const { fravaerId } = useParams();
    const { pathname } = useLocation();
    const sykefravaer = useSykefravaerFraId(fravaerId);

    if (!fravaerId) {
        return null;
    }

    const brodsmuler = getBrodsmuler(fravaerId);

    // TODO: Erstatt med feilmeldingsside
    if (!sykefravaer) {
        return <p>kunne ikke finne sykefravær</p>;
    }

    const { soknader, sykmeldinger } = sykefravaer;

    // TODO: lag useSelectors for disse
    const kreverHandling = sykmeldinger.filter(sykmelding => sykmelding.status.status === StatusTyper.NY);
    const kreverIkkeHandling = sykmeldinger.filter(sykmelding => sykmelding.status.status !== StatusTyper.NY);

    // TODO: Sett opp logikk for visning av veileder
    const veileder = getVeileder(sykefravaer);

    return (
        <>
            <Header location={SIDETITTEL} />
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />
                <Sidetittel style={{ textAlign: 'center', marginBottom: '1rem' }}>Sykefravær</Sidetittel>
                <Undertittel style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    fra {new Date().toDateString()} til {new Date().toDateString()}
                </Undertittel>

                {veileder}

                {kreverHandling.length > 0 && (
                    <Kategori tittel={'Nye varsler'}>
                        {kreverHandling.map(sykmeldingData => (
                            <SykmeldingPanel
                                key={sykmeldingData.sykmelding.id}
                                lenke={`${pathname}/${sykmeldingData.sykmelding.id}`}
                                sykmeldingData={sykmeldingData}
                            />
                        ))}
                    </Kategori>
                )}
                {kreverIkkeHandling.length > 0 && (
                    <Kategori tittel={'Dokumenter'}>
                        {kreverIkkeHandling.map(sykmeldingData => (
                            <SykmeldingPanel
                                key={sykmeldingData.sykmelding.id}
                                lenke={`${pathname}/${sykmeldingData.sykmelding.id}`}
                                sykmeldingData={sykmeldingData}
                            />
                        ))}
                    </Kategori>
                )}
                <Kategori tittel={'Status'}>
                    <SoknadPanel lenke={'test'} sykmeldinger={sykmeldinger} soknader={soknader} />
                    <BeslutningPanel lenke={'test'} />
                </Kategori>
            </div>
        </>
    );
};

export default DokumentOversikt;
