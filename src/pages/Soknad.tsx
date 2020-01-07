import React from 'react';
import { useParams } from 'react-router-dom';

import Brodsmuler from '../components/brodsmuler/brodsmuler';
import Header from '../components/Header/Header';

const SIDETITTEL = 'Søknad';

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
            sti: `/sykmeldinger/${id}/soknad`,
            erKlikkbar: true,
        },
    ];
};

const Soknad = () => {
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
                Søknad
            </div>
        </>
    );
};

export default Soknad;
