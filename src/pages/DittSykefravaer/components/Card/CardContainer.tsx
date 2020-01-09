import './Card.less';

import React from 'react';

interface CardProps {
    children: JSX.Element | JSX.Element[];
}

const CardContainer = ({ children }: CardProps) => {
    return <nav className="card-container">{children}</nav>;
};

export default CardContainer;
