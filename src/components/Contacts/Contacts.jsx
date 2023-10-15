import React from 'react';
import css from './Contacts.module.css';

import { ReactComponent as EmailSvg } from '../../assets/icons/email.svg';
import { ReactComponent as TelSvg } from '../../assets/icons/tel.svg';
import { ReactComponent as SiteSvg } from '../../assets/icons/site.svg';

function Contacts(props) {
    const sectionTitle = props.sectionTitle;

    return (
        <aside className={css.contacts}>
            <h3 className={css.contacts__title}>
                {sectionTitle}
            </h3>
            <ul className={`body-small ${css.contacts__content}`}>
                <li className={css.contacts__item}>
                    <a
                        className={css["contacts__item-link"]}
                        href={`mailto:${props.userData?.email}`}
                    >
                        <span>
                            {props.userData?.email}
                        </span>
                        <span>
                            <EmailSvg className={`${css.contacts__icon} ${css.contacts__icon_email}`} />
                        </span>
                    </a>
                </li>
                <li className={css.contacts__item}>
                    <a
                        className={css["contacts__item-link"]}
                        href={`tel:${props.userData?.phone}`}
                    >
                        <span>
                            {props.userData?.phone}
                        </span>
                        <span>
                            <TelSvg className={`${css.contacts__icon} ${css.contacts__icon_tel}`} />
                        </span>
                    </a>
                </li>
                <li className={css.contacts__item}>
                    <a
                        className={css["contacts__item-link"]}
                        href={`https://${props.userData?.website}`}
                    >
                        <span>
                            {props.userData?.website}
                        </span>
                        <span>
                            <SiteSvg className={`${css.contacts__icon} ${css.contacts__icon_site}`} />
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Contacts;
