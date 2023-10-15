import React from 'react';
import css from './CardsList.module.css';
import Card from './Card/Card';

function CardsList(props) {
  const sectionTitle = props.sectionTitle;

  const generateCards = (cards) => {
    const currentCards = [];
    cards?.forEach(card => {
      currentCards.push({
        src: card?.photo,
        alt: card?.alt,
        title: card?.title,
        link: card.link,
      });
    });
    return currentCards;
  };

  const cards = generateCards(props.cards);

  if (!cards || cards.length === 0) {
    return (
      <section className={css.section}>
        <h2 className={css.section__title}>
          {sectionTitle}
        </h2>
        <p>Загружаю данные...</p>
      </section>
    );
  }

  const listItems = cards.map((card, index) => (
    <li key={`${index}-${card.type}-${index}`}>
      <Card state={props.state} card={props.cards[index]} />
    </li>
  ));

  return (
    <section className={css.section}>
      <h2 className={css.section__title}>
        {sectionTitle}
      </h2>
      <ul className={css.section__content}>
        {listItems}
      </ul>
    </section>
  );
}

export default CardsList;
