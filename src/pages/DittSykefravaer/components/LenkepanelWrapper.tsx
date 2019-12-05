import React from "react";
import { Link } from "react-router-dom";

import { Systemtittel } from "nav-frontend-typografi";
import { LenkepanelBase } from "nav-frontend-lenkepanel";

import "./LenkepanelWrapper.less";

interface LenkepanelProps {
  lenke: string;
  tittel: string;
  tekst: string;
  svg: string;
}

const LenkepanelWrapper = ({ lenke, tittel, tekst, svg }: LenkepanelProps) => {
  return (
    <LenkepanelBase
      border
      href=""
      linkCreator={linkProps => <Link {...linkProps} to={lenke} />}
    >
      <div className="lenkepanelwrapper-container">
        <img src={svg} width={100} alt="Lenkepanelillustrasjon" />
        <div className="lenkepanelwrapper-tekst">
          <Systemtittel className="lenkepanel__heading">{tittel}</Systemtittel>
          <p>{tekst}</p>
        </div>
      </div>
    </LenkepanelBase>
  );
};

export default LenkepanelWrapper;
