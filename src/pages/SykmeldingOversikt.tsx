import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import Brodsmuler from "../components/brodsmuler/brodsmuler";
import { LenkepanelBase } from "nav-frontend-lenkepanel";
import { Undertittel, Element, Sidetittel } from "nav-frontend-typografi";
import Veilederpanel from "nav-frontend-veilederpanel";
import PanelBase from "nav-frontend-paneler";
import Stegindikator from "nav-frontend-stegindikator";

import "./sykmeldingOversikt.less";

import book from "../svg/book.svg";
import bjorn from "../svg/bjorn.svg";
import useAppStore from "../store/useAppStore";
import StegindikatorSteg from "nav-frontend-stegindikator/lib/stegindikator-steg";

const getBrodsmuler = (id: string) => {
  return [
    {
      tittel: "Ditt sykefravaer",
      sti: "/",
      erKlikkbar: true
    },
    {
      tittel: "Dine sykeperioder",
      sti: "/sykmeldinger",
      erKlikkbar: true
    },
    {
      tittel: "Sykmelding",
      sti: `/${id}`,
      erKlikkbar: true
    }
  ];
};

const SykmeldingOversikt = () => {
  const history = useHistory();
  const { id } = useParams();
  const { sykmeldinger } = useAppStore();

  if (!id || !sykmeldinger) {
    return null;
  }
  const brodsmuler = getBrodsmuler(id);

  const aktuellSykmelding = sykmeldinger.find(
    sykmeldingDto => sykmeldingDto.sykmelding.id === id
  );

  if (!aktuellSykmelding) {
    return <p>kunne ikke finne sykmelding</p>;
  }

  return (
    <div className="limit">
      <Brodsmuler brodsmuler={brodsmuler} />
      <Sidetittel style={{ textAlign: "center", marginBottom: "1rem" }}>
        Sykmelding
      </Sidetittel>
      <Undertittel style={{ textAlign: "center", marginBottom: "3rem" }}>
        fra {aktuellSykmelding.sykmelding.perioder[0].fom} til{" "}
        {
          aktuellSykmelding.sykmelding.perioder[
            aktuellSykmelding.sykmelding.perioder.length - 1
          ].tom
        }
      </Undertittel>
      <div style={{ marginBottom: "3rem" }}>
        <Veilederpanel type={"plakat"} svg={bjorn}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nisi
          officia? Suscipit vero consectetur itaque perspiciatis optio, sint
          obcaecati unde ipsa ad facere debitis in quae fuga tenetur laboriosam
          exercitationem?
        </Veilederpanel>
      </div>
      <Kategori tittel={"Status"}><p>Stegindikator</p></Kategori>
      <Kategori tittel={"Dokumenter"}>
        <Lenkepanel
          innhold={"Inntektsmelding"}
          lenkeTil={`/sykmeldinger/${id}/inntektsmelding`}
        />
        <Lenkepanel
          innhold={"Vis sykmelding"}
          lenkeTil={`/sykmeldinger/${id}/vis`}
        />
        <Lenkepanel
          innhold={"Søknader om sykepenger for periode"}
          lenkeTil={`/sykmeldinger/${id}/søknad`}
        />
        <Lenkepanel
          innhold={"Beslutning fra NAV"}
          lenkeTil={`/sykmeldinger/${id}/beslutning`}
        />
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
    <div style={{ marginBottom: "3rem" }}>
      <Element>{tittel}</Element>
      <hr />
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="sykmelding"
              style={{ marginBottom: "1rem" }}
            >
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
      style={{ paddingTop: "0", paddingBottom: "0" }}
      border
      href=""
      linkCreator={linkProps => <Link {...linkProps} to={lenkeTil} />}
      onClick={() => history.push(lenkeTil)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <img
          src={book}
          alt="ikon"
          className="sykmelding-lenkepanel__ikon"
          style={{
            marginRight: "1rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingRight: "1rem",
            borderRight: "0.04rem solid black" //
          }}
        />
        {typeof innhold === "string" ? (
          <Undertittel className="sykmelding-lenkepanel__innhold">
            {innhold}
          </Undertittel>
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
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
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
          width: "10rem",
          backgroundColor: "lightblue",
          height: "10rem",
          border: "2px solid orange",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="box"></div>
      </div>
    </div>
  </>
);
