import React from 'react';
import bjorn from '../../../svg/bjorn.svg';
import { Link } from 'react-router-dom';

import './Card.less';

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
                <h3 className="card__content-title">{tittel}</h3>
                <section>{tekst}</section>
            </article>
        </Link>
    );
};

export default Card;
