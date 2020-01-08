import React from 'react';
import { useParams } from 'react-router-dom';

import Brodsmuler from '../components/Brodsmuler/Brodsmuler';
import Header from '../components/Header/Header';

const SIDETITTEL = 'Inntektsmelding';

const getBrodsmuler = (id: string) => {
    return [
        {
            tittel: 'Ditt sykefravaer',
            sti: '/',
            erKlikkbar: true,
        },
        {
            tittel: 'Dine sykmeldinger',
            sti: '/sykmeldinger',
            erKlikkbar: true,
        },
        {
            tittel: 'Sykmelding',
            sti: `/sykmeldinger/${id}`,
            erKlikkbar: true,
        },
        {
            tittel: 'Inntektsmelding',
            sti: `/sykmeldinger/${id}/inntektsmelding`,
            erKlikkbar: true,
        },
    ];
};

const Inntektsmelding = () => {
    const { id } = useParams();
    if (!id) {
        return null;
    }

    const brodsmuler = getBrodsmuler(id);

    return (
        <>
            <Header location={SIDETITTEL} />
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />
                Inntektsmelding
            </div>
        </>
    );
};

export default Inntektsmelding;
