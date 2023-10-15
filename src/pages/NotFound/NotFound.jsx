import React from 'react';
import css from './NotFound.module.css';

import { Link } from 'react-router-dom';

const NotFound = (props) => {
    return (
        <article className={css.notfound}>
            <h1 className={css.notfound__title}>Страница не найдена</h1>
            <Link
                to="/"
                className={`body-default ${css.notfound__back}`}
            >
                Вернуться на главную
            </Link>
        </article>
    )
}

export default NotFound;
