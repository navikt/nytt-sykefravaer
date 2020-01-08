import Spinner from 'nav-frontend-spinner';
import React, { useEffect } from 'react';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';

import useAppStore from '../store/useAppStore';
import useFetch, { FetchState, hasAnyFailed, hasData, isAnyNotStartedOrPending, isNotStarted } from '../hooks/useFetch';
import { Status, Sykmelding } from '../types/sykmeldingTypes';
import { SykmeldingData } from '../types/sykmeldingDataTypes';

const DataFetcher = (props: { children: any }) => {
    const { setSykmeldinger } = useAppStore();
    const sykmeldingerFetcher = useFetch<SykmeldingData[]>();

    useEffect(() => {
        if (isNotStarted(sykmeldingerFetcher)) {
            sykmeldingerFetcher.fetch(
                '/syforest/sykmeldinger/',
                undefined,
                (fetchState: FetchState<SykmeldingData[]>) => {
                    if (hasData(fetchState)) {
                        const { data } = fetchState;
                        const sykmeldinger = data.map(sykmeldingData => ({
                            status: new Status(sykmeldingData.status),
                            sykmelding: new Sykmelding(sykmeldingData.sykmelding),
                        }));
                        console.log(sykmeldinger);
                        setSykmeldinger(sykmeldinger);
                    }
                },
            );
        }
    }, [setSykmeldinger, sykmeldingerFetcher]);

    if (isAnyNotStartedOrPending([sykmeldingerFetcher])) {
        return <Spinner />;
    }

    if (hasAnyFailed([sykmeldingerFetcher])) {
        return (
            <AlertStripeFeil>
                Det oppsto feil ved henting av data. Vi jobber med å løse saken. Vennligst prøv igjen senere.
            </AlertStripeFeil>
        );
    }
    return props.children;
};

export default DataFetcher;
