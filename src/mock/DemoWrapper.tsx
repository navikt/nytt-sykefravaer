import FetchMock, { MiddlewareUtils } from 'yet-another-fetch-mock';
import React, { useState } from 'react';

import App from '../App';
import { brukere } from './data/brukere';
import { sykefravaerMock } from './data/sykefravaer';
import { sykmeldingerMock } from './data/sykmeldinger';

/*
Denne komponenten vises kun i dev-modus, og lar deg skifte mellom ulike brukere med forskjellig sykmeldingshistorikk.
*/

const mock = FetchMock.configure({
    enableFallback: true,
    middleware: MiddlewareUtils.combine(MiddlewareUtils.delayMiddleware(1000), MiddlewareUtils.loggingMiddleware()),
});

const mockRequests = (brukerId: string | null) => {
    mock.get('/syforest/sykmeldinger', sykmeldingerMock);
    mock.get('/syforest/sykefravaer', sykefravaerMock);
};

const DemoWrapper = () => {
    const [brukerId, setBrukerId] = useState<string | null>(null);

    mockRequests(brukerId);

    return (
        <>
            <select
                style={{ position: 'absolute', right: 0, zIndex: 1 }}
                name="brukere"
                id="bruker-select"
                onChange={event => setBrukerId(event.target.value)}
            >
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
