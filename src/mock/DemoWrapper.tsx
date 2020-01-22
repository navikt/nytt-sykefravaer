import React, { useState } from 'react';

import App from '../App';
import useMockAppStore from './useMockAppStore';
import useFetch, { FetchState, hasData, isNotStarted } from '../hooks/useFetch';

/*
Denne komponenten vises kun i dev-modus, og lar deg skifte mellom ulike brukere med forskjellig sykmeldingshistorikk.
*/

const DemoWrapper = () => {
    const { brukerId, setBrukerId } = useMockAppStore();
    const [brukere, setBrukere] = useState<{ value: string; label: string }[]>([]);
    const brukerIdFetcher = useFetch<string>();
    const brukereFetcher = useFetch<{ value: string; label: string }[]>();

    if (isNotStarted(brukerIdFetcher)) {
        brukerIdFetcher.fetch(
            `${process.env.REACT_APP_API_URL}/bruker/`,
            undefined,
            (fetchState: FetchState<string>) => {
                if (hasData(fetchState)) {
                    const { data } = fetchState;
                    setBrukerId(data);
                }
            },
        );
    }

    if (isNotStarted(brukereFetcher)) {
        brukereFetcher.fetch(
            `${process.env.REACT_APP_API_URL}/brukere/`,
            undefined,
            (fetchState: FetchState<{ value: string; label: string }[]>) => {
                if (hasData(fetchState)) {
                    const { data } = fetchState;
                    setBrukere(data);
                }
            },
        );
    }

    return (
        <>
            <select
                style={{ position: 'absolute', right: 0, zIndex: 1, width: 20, background: 'white' }}
                name="brukere"
                id="bruker-select"
                onChange={event => {
                    setBrukerId(event.target.value);
                }}
                value={brukerId}
            >
                <option key="init" value="">
                    -- Bytt bruker --
                </option>
                {brukere.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            <App />
        </>
    );
};

export default DemoWrapper;
