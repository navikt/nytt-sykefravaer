import React from 'react';
import { Sidetittel, Undertittel } from 'nav-frontend-typografi';

import BehandledePerioderPanel from './components/BehandledePerioderPanel';
import Kategori from '../../components/Kategori';
import SykmeldingPanel from './components/SykmeldingPanel';
import Veileder from '../../components/Veileder/Veileder';
import bjorn from '../../svg/bjorn.svg';
import useAppStore from '../../store/useAppStore';
import Brodsmuler, { Brodsmule } from '../../components/Brodsmuler/Brodsmuler';

const brodsmuler: Brodsmule[] = [
    {
        tittel: 'Ditt sykefravaer',
        sti: '/',
        erKlikkbar: true,
    },
    {
        tittel: 'Dine sykmeldinger',
        sti: '/',
        erKlikkbar: true,
    },
];

const DineSykmeldinger = () => {
    document.title = 'Dine sykmeldinger - www.nav.no';

    const { sykmeldinger } = useAppStore();
    console.log(sykmeldinger);

    // TODO: Erstatt dette med en fornuftig visning for ingen sykmeldinger
    if (!sykmeldinger) {
        return <div>Ingen sykmeldinger</div>;
    }

    return (
        <div className="limit">
            <Brodsmuler brodsmuler={brodsmuler} />
            <Sidetittel style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '2rem' }}>
                Sykmeldingsperioder
            </Sidetittel>
            <Undertittel style={{ textAlign: 'center', marginBottom: '3rem' }}>
                Oversikt over perioder du er- eller har vært sykmeldt
            </Undertittel>
            <div style={{ marginBottom: '3rem' }}>
                <Veileder
                    svg={bjorn}
                    kompakt
                    innhold={
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat ipsa totam
                            eligendi? Dolore magni quia ullam, cumque nesciunt vel laudantium laborum nisi repudiandae
                            neque veritatis, accusantium ipsum esse nam?
                        </p>
                    }
                />
            </div>
            <div className="sykmelding-kategori"></div>
            <Kategori tittel={'Krever handling'}>
                <SykmeldingPanel
                    lenke="/sykmelding"
                    antallNyeSykmeldinger={2}
                    periodeFra={new Date()}
                    periodeTil={new Date()}
                />
            </Kategori>
            <Kategori tittel="Ferdig behandlet">
                <BehandledePerioderPanel lenke="test" antallPerioder={3} />
            </Kategori>
        </div>
    );
};

export default DineSykmeldinger;
