import React from "react";
import { useHistory } from "react-router";
import { LenkepanelBase } from "nav-frontend-lenkepanel";
import { Link } from "react-router-dom";
import { Undertittel } from "nav-frontend-typografi";

import book from "../svg/book.svg";

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
            paddingTop: "1rem",
            paddingBottom: "1rem",
            marginRight: "2rem",
            alignSelf: "flex-start"
          }}
        />
        <div
          style={{
            display: "inlineBlock"
          }}
        >
          {typeof innhold === "string" ? (
            <Undertittel className="sykmelding-lenkepanel__innhold">
              {innhold}
            </Undertittel>
          ) : (
            innhold
          )}
        </div>
      </div>
    </LenkepanelBase>
  );
};

export default Lenkepanel;
