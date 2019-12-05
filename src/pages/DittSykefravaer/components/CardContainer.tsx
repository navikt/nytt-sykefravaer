import React from "react";

import "./Card.less";

interface CardProps {
  children: JSX.Element | JSX.Element[];
}

const CardContainer = ({ children }: CardProps) => {
  return <div className="card-container">{children}</div>;
};

export default CardContainer;
