import React from "react";
import bjorn from "../../../svg/bjorn.svg";
import { useHistory, Link } from "react-router-dom";

import "./Card.less";

interface CardProps {
  tittel: string;
  tekst: string;
  lenke: string;
}

const Card = ({ tittel, tekst, lenke }: CardProps) => {
  const history = useHistory();

  return (
    <button className="card" onClick={() => history.push(lenke)}>
      <div className="card__header">
        <img src={bjorn} className="card__header-image" />
      </div>
      <div className="card__content">
        <h3 style={{ margin: 0 }}>{tittel}</h3>
        <p>{tekst}</p>
      </div>
    </button>
  );
};

export default Card;
