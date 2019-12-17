import React from 'react';
import { useParams } from 'react-router-dom';

import Brodsmuler from '../components/brodsmuler/brodsmuler';

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
            tittel: 'Søknad',
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
        <div className="limit">
            <Brodsmuler brodsmuler={brodsmuler} />
            Søknad
        </div>
    );
};

export default Soknad;
