import './Card.less';

import React from 'react';
import { Link } from 'react-router-dom';

import bjorn from '../../../../svg/bjorn.svg';

interface CardProps {
    tittel: string;
    tekst: string;
    lenke: string;
}

const Card = ({ tittel, tekst, lenke }: CardProps) => {
    return (
        <Link className="card" to={lenke}>
            <div className="card__header">
                <img src={bjorn} className="card__header-image" alt="lenkeillustrasjon" />
            </div>
            <article className="card__content">
                <h4 className="card__content-title">{tittel}</h4>
                <section>{tekst}</section>
            </article>
        </Link>
    );
};

export default Card;
