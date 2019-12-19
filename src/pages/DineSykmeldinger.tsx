import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Sidetittel, Element, Undertittel } from 'nav-frontend-typografi';
import Brodsmuler, { Brodsmule } from '../components/brodsmuler/brodsmuler';
import Veileder, { StemningTypes } from '../components/veileder/Veileder';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import book from '../svg/book.svg';
import useAppStore from '../store/useAppStore';
import UnderstreketOverskrift from '../components/UnderstreketOverskrift/UnderstreketOverskrift';

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
                    innhold={
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat ipsa totam
                            eligendi? Dolore magni quia ullam, cumque nesciunt vel laudantium laborum nisi repudiandae
                            neque veritatis, accusantium ipsum esse nam?
                        </p>
                    }
                    stemning={StemningTypes.GLAD}
                />
            </div>
            <div className="sykmelding-kategori"></div>
            <Sykmeldingkategori tittel={'Nye sykmeldinger'}>
                <SykmeldingLenkepanel
                    sykemldingId={sykmeldinger[0].sykmelding.id}
                    syketilfelleStartdato={new Date('01-12-2019')}
                    syketilfelleSluttdato={new Date('10-12-2019')}
                />
            </Sykmeldingkategori>
            <Sykmeldingkategori tittel={'Tidligere sykmeldinger'}>
                <SykmeldingLenkepanel
                    sykemldingId={'2'}
                    syketilfelleStartdato={new Date('01-12-2019')}
                    syketilfelleSluttdato={new Date('10-12-2019')}
                />
                <SykmeldingLenkepanel
                    sykemldingId={'3'}
                    syketilfelleStartdato={new Date('01-12-2019')}
                    syketilfelleSluttdato={new Date('10-12-2019')}
                />
                <SykmeldingLenkepanel
                    sykemldingId={'4'}
                    syketilfelleStartdato={new Date('01-12-2019')}
                    syketilfelleSluttdato={new Date('10-12-2019')}
                />
            </Sykmeldingkategori>
        </div>
    );
};

export default DineSykmeldinger;

interface SykmeldingkategoriProps {
    tittel: string;
    children: JSX.Element | JSX.Element[];
}

const Sykmeldingkategori = ({ tittel, children }: SykmeldingkategoriProps) => {
    return (
        <div style={{ marginBottom: '3rem' }}>
            <UnderstreketOverskrift tittel={tittel} />
            {Array.isArray(children)
                ? children.map((child, index) => (
                      <div key={index} className="sykmelding" style={{ marginBottom: '1rem' }}>
                          {child}
                      </div>
                  ))
                : children}
        </div>
    );
};

// ---------------

interface SykmeldingLenkepanelProps {
    sykemldingId: string;
    syketilfelleStartdato: Date;
    syketilfelleSluttdato: Date;
}

const SykmeldingLenkepanel = ({
    sykemldingId,
    syketilfelleStartdato,
    syketilfelleSluttdato,
}: SykmeldingLenkepanelProps) => {
    const history = useHistory();
    return (
        <LenkepanelBase
            style={{ paddingTop: '0', paddingBottom: '0' }}
            border
            href=""
            linkCreator={linkProps => <Link {...linkProps} to={`/sykmeldinger/${sykemldingId}`} />}
            onClick={() => history.push(`/sykmeldinger/${sykemldingId}`)}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img
                    src={book}
                    alt="ikon"
                    className="sykmelding-lenkepanel__ikon"
                    style={{
                        marginRight: '1rem',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        paddingRight: '1rem',
                        borderRight: '0.04rem solid black', //
                    }}
                />
                <Undertittel className="sykmelding-lenkepanel__innhold">
                    Sykmelding fra {syketilfelleStartdato.toLocaleDateString()} -{' '}
                    {syketilfelleSluttdato.toLocaleDateString()}
                </Undertittel>
            </div>
        </LenkepanelBase>
    );
};
