import React from 'react';
import css from './Card.module.css';

import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <figure className={css.item} >
            <img
                className={css.item__content}
                src={props.card?.photo}
                alt={props.card?.alt}
            />
            <figcaption className={css.item__title}>
                {props.card.link ? (
                    <Link to={props.card.link} className={`body-default ${css.title__content} ${css.item__link}`}>
                        {props.card.title}
                    </Link>
                ) : (
                    <span className={`body-default ${css.title__content}`}>{props.card.title}</span>
                )}
            </figcaption>
        </figure>
    )
}

export default Card;