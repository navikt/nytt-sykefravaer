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
    <Link className="card" to={lenke}>
      <div className="card__header">
        <img src={bjorn} className="card__header-image" />
      </div>
      <div className="card__content">
        <h4 className="card__content-title">{tittel}</h4>
        <section>{tekst}</section>
      </div>
    </Link>
  );
};

export default Card;
