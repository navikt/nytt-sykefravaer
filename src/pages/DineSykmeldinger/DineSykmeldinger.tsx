import React from 'react';

import { Sidetittel, Undertittel } from 'nav-frontend-typografi';
import Brodsmuler, { Brodsmule } from '../../components/brodsmuler/brodsmuler';
import useAppStore from '../../store/useAppStore';
import Kategori from '../../components/Kategori';
import SykmeldingPanel from './components/SykefravaerPanel';
import BehandledeFravaerPanel from './components/BehandledeFravaerPanel';

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

    const { sykefravaer } = useAppStore();
    console.log(sykefravaer);

    // TODO: Erstatt dette med en fornuftig visning for ingen sykefravaer
    if (!sykefravaer) {
        return <div>Ingen sykefravaer</div>;
    }

    return (
        <div className="limit">
            <Brodsmuler brodsmuler={brodsmuler} />
            <Sidetittel style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '2rem' }}>
                Dine sykefravær
            </Sidetittel>
            <Undertittel style={{ textAlign: 'center', marginBottom: '3rem' }}>
                Oversikt over pågående- og tidligere sykefravær
            </Undertittel>
            <Kategori tittel={'Krever handling'}>
                {sykefravaer.map(fravaer => (
                    <SykmeldingPanel
                        key={fravaer.id}
                        lenke={fravaer.id}
                        antallNyeSykmeldinger={fravaer.sykmeldinger.length}
                        periodeFra={new Date()}
                        periodeTil={new Date()}
                    />
                ))}
            </Kategori>
            <Kategori tittel="Ferdig behandlet">
                <BehandledeFravaerPanel lenke="test" antallSykefravær={3} />
            </Kategori>
        </div>
    );
};

export default DineSykmeldinger;
