import React from 'react';
import FetchMock, { MiddlewareUtils } from 'yet-another-fetch-mock';

import App from '../App';
import useMockAppStore from './useMockAppStore';
import { brukere } from './data/brukere';

/*
Denne komponenten vises kun i dev-modus, og lar deg skifte mellom ulike brukere med forskjellig sykmeldingshistorikk.
*/

let mock: FetchMock;

const configureMock = () => {
    return FetchMock.configure({
        enableFallback: true,
        middleware: MiddlewareUtils.combine(MiddlewareUtils.delayMiddleware(1000), MiddlewareUtils.loggingMiddleware()),
    });
};

const mockRequests = (brukerId: string) => {
    mock = configureMock();

    console.log('new mocks');
    const sykefravaer = brukere.find(bruker => bruker.value === brukerId)?.sykefravaer;

    mock.get('/syforest/sykmeldinger', []);
    if (sykefravaer) {
        mock.get('/syforest/sykefravaer', sykefravaer);
    } else {
        mock.get('/syforest/sykefravaer', []);
    }
};

const DemoWrapper = () => {
    const { brukerId, setBrukerId } = useMockAppStore();

    mockRequests(brukerId);

    return (
        <>
            <select
                style={{ position: 'absolute', right: 0, zIndex: 1 }}
                name="brukere"
                id="bruker-select"
                onChange={event => {
                    mock.restore();
                    mock = configureMock();

                    setBrukerId(event.target.value);
                }}
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
