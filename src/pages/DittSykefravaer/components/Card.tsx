import React from "react";
import bjorn from "../../../svg/bjorn.svg";

import "./Card.less";

interface CardProps {
  tittel: string;
  tekst: string;
}

const Card = ({ tittel, tekst }: CardProps) => {
  return (
    <div className="card">
      <div className="card__header">
        <img src={bjorn} className="card__header-image" />
      </div>
      <div className="card__content">
        <h3 style={{ margin: 0 }}>{tittel}</h3>
        <p>{tekst}</p>
      </div>
    </div>
  );
};

export default Card;
