import React from 'react';

import { Sidetittel } from 'nav-frontend-typografi';
import Brodsmuler, { Brodsmule } from '../../components/brodsmuler/brodsmuler';
import Veileder from '../../components/veileder/Veileder';

import book from '../../svg/book.svg';
import bjorn from '../../svg/bjorn.svg';
import useAppStore from '../../store/useAppStore';
import Kategori from '../../components/Kategori';
import LenkepanelWrapper from '../../components/Lenkepanel/LenkepanelWrapper';

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
            <Sidetittel style={{ textAlign: 'center', marginBottom: '3rem' }}>Dine sykmeldinger</Sidetittel>
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
                <LenkepanelWrapper
                    lenke="/hello"
                    tittel="sykmelding fra ... til .... 2019"
                    tekstGra="grå tekst"
                    tekstStatus="status i sykmeldingen"
                    svg={bjorn}
                    ikonbakgrunn="gul"
                />
            </Kategori>
            <Kategori tittel="Status">
                <LenkepanelWrapper
                    lenke="/hello"
                    tittel="sykmelding fra ... til .... 2019"
                    tekstGra="grå tekst"
                    tekstStatus="status i sykmeldingen"
                    svg={bjorn}
                    ikonbakgrunn="gul"
                />
            </Kategori>
        </div>
    );
};

export default DineSykmeldinger;
