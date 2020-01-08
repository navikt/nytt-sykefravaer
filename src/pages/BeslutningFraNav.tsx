import React from 'react';
import { useParams } from 'react-router-dom';

import Brodsmuler from '../components/Brodsmuler/Brodsmuler';
import Header from '../components/Header/Header';

const SIDETITTEL = 'Beslutning fra NAV';

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
            tittel: SIDETITTEL,
            sti: `/sykmeldinger/${id}/beslutning`,
            erKlikkbar: true,
        },
    ];
};

const BeslutningFraNav = () => {
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
                Beslutning fra NAV
            </div>
        </>
    );
};

export default BeslutningFraNav;
