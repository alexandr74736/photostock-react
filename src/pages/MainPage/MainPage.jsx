import React from 'react';
import css from './MainPage.module.css';
import CardsList from '../../components/CardsList/CardsList';

const MainPage = ({ state }) => {
  const users = state.users;

  const generateRandomUserPhotos = (users) => {
    const randomUserPhotos = [];
    users.forEach(user => {
      if (user.albums.length > 0) {
        const randomAlbum = user.albums[Math.floor(Math.random() * user.albums.length)];
        if (randomAlbum.photos.length > 0) {
          const randomPhoto = randomAlbum.photos[Math.floor(Math.random() * randomAlbum.photos.length)];
          randomUserPhotos.push({
            userId: user.id,
            user: user.name,
            photoId: randomPhoto.id,
            photo: randomPhoto.url,
            title: user.username,
            link: `/profile/${user.id - 1}`,
          });
        }
      }
    });
    return randomUserPhotos;
  };


  const randomUserPhotos = generateRandomUserPhotos(users);

  return (
    <article className={css.content}>
      <CardsList state={state} cards={randomUserPhotos} sectionTitle="Популярное" />
    </article>
  );
}

export default MainPage;
