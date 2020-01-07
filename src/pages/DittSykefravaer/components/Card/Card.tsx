import './Card.less';

import React from 'react';
import { HoyreChevron } from 'nav-frontend-chevron';
import { Link } from 'react-router-dom';
import { Undertittel } from 'nav-frontend-typografi';

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
            <div className="card__content">
                <article className="card__content-text">
                    <Undertittel className="card__content-title">{tittel}</Undertittel>
                    <section>{tekst}</section>
                </article>
                <HoyreChevron className="card__content-chevron" />
            </div>
        </Link>
    );
};

export default Card;
