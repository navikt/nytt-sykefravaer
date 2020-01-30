import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import { useParams } from 'react-router-dom';

import Brodsmuler from '../components/Brodsmuler/Brodsmuler';
import Header from '../components/Header/Header';
import useFetch, { isNotStarted } from '../hooks/useFetch';
import { useSykmeldingFraId } from '../store/selectAppStore';

const SIDETITTEL = 'Vis sykmelding';

const getBrodsmuler = (fravaerId?: string) => {
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
            tittel: 'Status i sykefravær',
            sti: `/fravaer/${fravaerId}`,
            erKlikkbar: true,
        },
        {
            tittel: SIDETITTEL,
            sti: '/',
            erKlikkbar: true,
        },
    ];
};

const Sykmelding = () => {
    const { fravaerId, sykmeldingId } = useParams();
    const sykmelding = useSykmeldingFraId(fravaerId, sykmeldingId);

    const sendSykmelding = useFetch<any>();
    const bekreftSykmelding = useFetch<any>();
    const avbrytSykmelding = useFetch<any>();
    const brukSykmelding = useFetch<any>();

    if (!sykmeldingId) {
        return null;
    }

    const brodsmuler = getBrodsmuler(fravaerId);

    return (
        <>
            <Header location={SIDETITTEL} />
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />
                sykmelding
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Knapp
                        onClick={() => {
                            if (isNotStarted(sendSykmelding)) {
                                sendSykmelding.fetch(
                                    `${process.env.REACT_APP_API_URL}/sykmelding/send/`,
                                    {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({ id: sykmeldingId, skjemaData: {} }),
                                    },
                                    () => {
                                        window.location.reload();
                                    },
                                );
                            }
                        }}
                    >
                        Send sykmelding
                    </Knapp>
                    <Knapp
                        onClick={() => {
                            if (isNotStarted(bekreftSykmelding)) {
                                sendSykmelding.fetch(
                                    `${process.env.REACT_APP_API_URL}/sykmelding/bekreft/`,
                                    {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({ id: sykmeldingId, skjemaData: {} }),
                                    },
                                    () => {
                                        window.location.reload();
                                    },
                                );
                            }
                        }}
                    >
                        Bekreft sykmelding
                    </Knapp>
                    <Knapp
                        onClick={() => {
                            if (isNotStarted(avbrytSykmelding)) {
                                avbrytSykmelding.fetch(
                                    `${process.env.REACT_APP_API_URL}/sykmelding/avbryt/${sykmeldingId}`,
                                    {
                                        method: 'POST',
                                    },
                                    () => {
                                        window.location.reload();
                                    },
                                );
                            }
                        }}
                    >
                        Avbryt sykmelding
                    </Knapp>
                    <Knapp
                        onClick={() => {
                            if (isNotStarted(brukSykmelding)) {
                                brukSykmelding.fetch(
                                    `${process.env.REACT_APP_API_URL}/sykmelding/bruk/${sykmeldingId}`,
                                    {
                                        method: 'POST',
                                    },
                                    () => {
                                        window.location.reload();
                                    },
                                );
                            }
                        }}
                    >
                        Bruk avbrutt sykmelding
                    </Knapp>
                </div>
                <div>
                    <h1>Status</h1>
                    {JSON.stringify(sykmelding?.status)}
                </div>
                <div>
                    <h1>Sykmelding</h1>
                    {JSON.stringify(sykmelding?.sykmelding)}
                </div>
            </div>
        </>
    );
};

export default Sykmelding;
