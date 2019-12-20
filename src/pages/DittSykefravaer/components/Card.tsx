import React from 'react';
import bjorn from '../../../svg/bjorn.svg';
import { Link } from 'react-router-dom';

import './Card.less';
import { Undertittel } from 'nav-frontend-typografi';

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
                <Undertittel className="card__content-title">{tittel}</Undertittel>
                <section>{tekst}</section>
            </article>
        </Link>
    );
};

export default Card;
