import React from 'react';
import css from './Profile.module.css';

import CardsList from '../../components/CardsList/CardsList';
import { useParams, Outlet } from 'react-router-dom';
import Contacts from '../../components/Contacts/Contacts';
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg';

const Profile = ({ state }) => {
  const { id, albumId } = useParams();
  const user = state.users[id];
  const albums = user?.albums;
  const username = user?.username;

  const generateAlbumsList = (albums) => {
    const userAlbums = [];
    albums?.forEach((album, index) => {
      userAlbums.push({
        userId: user.id,
        user: user.name,
        username: user.username,
        id: album.id,
        photoId: album.photos[0].id,
        photo: album.photos[0].url,
        title: album.title,
        link: `/profile/${user.id - 1}/${index}`,
      });
    });
    return userAlbums;
  };

  const userAlbums = generateAlbumsList(albums);

  return (
    <article className={css.main__content}>
      {albumId ? (
        <>
          <section className={css['content__title-wrapper']}>
            <h1 className={`${css.content__title} ${css.content__title_profile}`}>
              <ProfileSvg className={css['content__title-icon']} />
              {username}
            </h1>
            <Contacts userData={user} sectionTitle="Контакты" />
          </section>
          <Outlet />
        </>
      ) : (
        <>
          <section className={css['content__title-wrapper']}>
            <h1 className={`${css.content__title} ${css.content__title_profile}`}>
              <ProfileSvg className={css['content__title-icon']} />
              {username}
            </h1>
            <Contacts userData={user} sectionTitle="Контакты" />
          </section>
          <CardsList state={state} cards={userAlbums} sectionTitle="Альбомы" />
        </>
      )}
    </article>
  );
};

export default Profile;
