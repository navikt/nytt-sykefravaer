import React from 'react';
import { useParams } from 'react-router-dom';

import Brodsmuler from '../../components/Brodsmuler/Brodsmuler';
import SoknadAvvist from './components/SoknadAvvist';
import SoknadGodkjent from './components/SoknadGodkjent';
import useAppStore from '../../store/useAppStore';
import { Beslutning } from '../../types/soknadTypes';

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
            tittel: 'Beslutning fra NAV',
            sti: `/sykmeldinger/${id}/beslutning`,
            erKlikkbar: true,
        },
    ];
};

const BeslutningFraNav = () => {
    const { id } = useParams();
    const { sykmeldinger, soknader } = useAppStore(); // todo: hent inn søknad

    if (!id || !sykmeldinger || !soknader) {
        return null;
    }

    const brodsmuler = getBrodsmuler(id);

    const aktuellSykmelding = sykmeldinger.find(sykmeldingDto => sykmeldingDto.sykmelding.id === id);
    const akutellSoknad = soknader[0]; // todo: finne ut hvordan søknader passer inn i løpet

    if (!aktuellSykmelding || !akutellSoknad) {
        return <p>kunne ikke finne sykmelding eller søknad</p>;
    }

    const { beslutning } = akutellSoknad;

    if (beslutning === Beslutning.GODKJENT) {
        return (
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />
                <SoknadGodkjent sykmeldingDto={aktuellSykmelding} soknad={akutellSoknad} />
            </div>
        );
    }

    if (beslutning === Beslutning.AVVIST) {
        return (
            <div className="limit">
                <Brodsmuler brodsmuler={brodsmuler} />
                <SoknadAvvist sykmeldingDto={aktuellSykmelding} soknad={akutellSoknad} />
            </div>
        );
    }
    return null;
};

export default BeslutningFraNav;
