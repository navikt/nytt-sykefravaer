import React from 'react';
import { useParams } from 'react-router-dom';

import Brodsmuler from '../../components/brodsmuler/brodsmuler';
import { Undertittel, Sidetittel } from 'nav-frontend-typografi';
import useAppStore from '../../store/useAppStore';
import SykmeldingPanel from './components/SykmeldingPanel';
import SoknadPanel from './components/SoknadPanel';
import BeslutningPanel from './components/BeslutningPanel';
import Kategori from '../../components/Kategori';
import './sykmeldingOversikt.less';

const getBrodsmuler = (id: string) => {
    return [
        {
            tittel: 'Ditt sykefravaer',
            sti: '/',
            erKlikkbar: true,
        },
        {
            tittel: 'Dine sykeperioder',
            sti: '/sykmeldinger',
            erKlikkbar: true,
        },
        {
            tittel: 'Sykmelding',
            sti: `/${id}`,
            erKlikkbar: true,
        },
    ];
};

const SykmeldingOversikt = () => {
    document.title = 'Sykmelding - www.nav.no';

    const { id } = useParams();
    const { sykmeldinger } = useAppStore();

    if (!id || !sykmeldinger) {
        return null;
    }
    const brodsmuler = getBrodsmuler(id);

    const aktuellSykmelding = sykmeldinger.find(sykmeldingDto => sykmeldingDto.sykmelding.id === id);

    if (!aktuellSykmelding) {
        return <p>kunne ikke finne sykmelding</p>;
    }

    const { sykmelding } = aktuellSykmelding;

    return (
        <div className="limit">
            <Brodsmuler brodsmuler={brodsmuler} />
            <Sidetittel style={{ textAlign: 'center', marginBottom: '1rem' }}>Sykmelding</Sidetittel>
            <Undertittel style={{ textAlign: 'center', marginBottom: '3rem' }}>
                fra {sykmelding.perioder[0].fom.toDateString()} til{' '}
                {sykmelding.perioder[sykmelding.perioder.length - 1].tom.toDateString()}
            </Undertittel>

            <div style={{ marginBottom: '3rem' }}>{/* Contitional visning av bjørn */}</div>

            <Kategori tittel={'Krever handling'}>
                <SykmeldingPanel lenke={`test`} sykmelding={aktuellSykmelding} />
            </Kategori>
            <Kategori tittel={'Status'}>
                <SoknadPanel lenke={'test'} sykmelding={aktuellSykmelding} />
                <BeslutningPanel lenke={'test'} />
            </Kategori>
        </div>
    );
};

export default SykmeldingOversikt;
