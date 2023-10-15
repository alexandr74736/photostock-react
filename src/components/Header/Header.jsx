import React from 'react';
import css from './Header.module.css';

import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/icons/logo.svg';


const Header = () => {
    return (
        <div className={`${css.header} ${css.header__overlay} ${css.header_primary}`}>
            <div>
                <Link
                    className={css.header__logo}
                    to="/"
                >
                    <span className={css.logo__title}>Photostock</span>
                    <LogoSvg className={css.logo__icon} />
                </Link>
            </div>
        </div>
    )
}

export default Header;