import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

import Brodsmuler from '../../components/brodsmuler/brodsmuler';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import { Undertittel, Element, Sidetittel, Normaltekst } from 'nav-frontend-typografi';
import Veilederpanel from 'nav-frontend-veilederpanel';
import PanelBase, { Panel } from 'nav-frontend-paneler';
import Stegindikator from 'nav-frontend-stegindikator';

import './sykmeldingOversikt.less';

import book from '../../svg/book.svg';
import bjorn from '../../svg/bjorn.svg';
import useAppStore from '../../store/useAppStore';
import { Knapp } from 'nav-frontend-knapper';
import StegindikatorSteg from 'nav-frontend-stegindikator/lib/stegindikator-steg';
import LenkepanelWrapper from '../../components/Lenkepanel/LenkepanelWrapper';

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

            <div style={{ marginBottom: '3rem' }}>
                {/* Contitional visning av bjørn */}
            </div>

            <Kategori tittel={'Krever handling'}>
            </Kategori>
            <Kategori tittel={'Status'}>
                
            </Kategori>
        </div>
    );
};

export default SykmeldingOversikt;

interface KategoriProps {
    tittel: string;
    children: JSX.Element | JSX.Element[];
}

const Kategori = ({ tittel, children }: KategoriProps) => {
    return (
        <div style={{ marginBottom: '3rem' }}>
            <Element>{tittel}</Element>
            <hr />
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

interface LenkepanelProps {
    innhold: string | JSX.Element;
    lenkeTil: string;
}

const Lenkepanel = ({ innhold, lenkeTil }: LenkepanelProps) => {
    const history = useHistory();
    return (
        <LenkepanelBase
            style={{ paddingTop: '0', paddingBottom: '0' }}
            border
            href=""
            linkCreator={linkProps => <Link {...linkProps} to={lenkeTil} />}
            onClick={() => history.push(lenkeTil)}
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
                {typeof innhold === 'string' ? (
                    <Undertittel className="sykmelding-lenkepanel__innhold">{innhold}</Undertittel>
                ) : (
                    innhold
                )}
            </div>
        </LenkepanelBase>
    );
};

// -------------

interface TidslinjeProps {}

const Tidslinje = () => {
    return (
        <PanelBase border>
            <div
                className="container"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </PanelBase>
    );
};

const Item = () => (
    <>
        <div>
            <div className="line"></div>
            <div
                className="item"
                style={{
                    width: '10rem',
                    backgroundColor: 'lightblue',
                    height: '10rem',
                    border: '2px solid orange',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="box"></div>
            </div>
        </div>
    </>
);
