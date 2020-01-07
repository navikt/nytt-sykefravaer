import './Card.less';

import React from 'react';

interface CardProps {
    children: JSX.Element | JSX.Element[];
}

const CardContainer = ({ children }: CardProps) => {
    return <div className="card-container">{children}</div>;
};

export default CardContainer;
