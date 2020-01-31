import Spinner from 'nav-frontend-spinner';
import React, { useEffect } from 'react';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';

import env from '../utils/environment';
import useAppStore from '../store/useAppStore';
import useMockAppStore from '../mock/useMockAppStore';
import useFetch, { FetchState, hasAnyFailed, hasData, isAnyNotStartedOrPending, isNotStarted } from '../hooks/useFetch';
import { Soknad } from '../types/soknadTypes/soknadTypes';
import { Sykefravaer } from '../types/sykefravaerTypes';
import { SykmeldingData } from '../types/sykmeldingDataTypes';

const DataFetcher = (props: { children: any }) => {
    // Demo
    const { brukerId } = useMockAppStore();

    const { setSykefravaer } = useAppStore();
    const sykefravaerFetcher = useFetch<Sykefravaer[]>();

    // Brukes for å resetter status på fetchere ved endring av BrukerID. Dette skjer kun i demo.
    useEffect(() => {
        if (env.isDevelopment || env.isRunningOnHeroku) {
            sykefravaerFetcher.reset();
        }
        // Ønsker ikke å oppdatere basert på endring i fetchers.
        // eslint-disable-next-line
    }, [brukerId]);

    // TODO: Ved henting av sykefravær bør man kun hente sykmeldings ID og det som trengs for å vise status. Deretter hentes sykmeldinger når man trenger de.
    // Slik DataFetcher er nå så hentes absolutt alt ved første pageview.

    useEffect(() => {
        if (isNotStarted(sykefravaerFetcher)) {
            sykefravaerFetcher.fetch(
                `${process.env.REACT_APP_API_URL}/sykefravaer/`,
                undefined,
                (fetchState: FetchState<Sykefravaer[]>) => {
                    if (hasData(fetchState)) {
                        const { data } = fetchState;
                        const sykefravaer = data.map(fravaer => ({
                            id: fravaer.id,
                            sykmeldinger: fravaer.sykmeldinger.map(sykmelding => new SykmeldingData(sykmelding)),
                            soknader: fravaer.soknader.map(soknad => new Soknad(soknad)),
                        }));
                        console.log(sykefravaer);
                        setSykefravaer(sykefravaer);
                    }
                },
            );
        }
    }, [setSykefravaer, sykefravaerFetcher]);

    if (isAnyNotStartedOrPending([sykefravaerFetcher])) {
        return <Spinner />;
    }

    if (hasAnyFailed([sykefravaerFetcher])) {
        return (
            <AlertStripeFeil>
                Det oppsto feil ved henting av data. Vi jobber med å løse saken. Vennligst prøv igjen senere.
            </AlertStripeFeil>
        );
    }
    return props.children;
};

export default DataFetcher;
