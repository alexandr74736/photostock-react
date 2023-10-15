import React from 'react';
import CardsList from '../../components/CardsList/CardsList';
import { useParams } from 'react-router-dom';

const Album = ({ state }) => {
    const { id, albumId } = useParams();
    const user = state.users[id];
    const album = user?.albums[albumId];
    const photos = album?.photos;

    const generatePhotosList = (photos) => {
        const albumPhotos = [];
        photos?.forEach(photo => {
            albumPhotos.push({
                userId: user.id,
                user: user.name,
                username: user.username,
                id: photo.id,
                photoId: photo.id,
                photo: photo.url,
                title: photo.title,
                link: ``,
            });
        });
        return albumPhotos;
    };

    const albumPhotos = generatePhotosList(photos);

    return (
        <CardsList state={state} cards={albumPhotos} sectionTitle={album?.title} />
    );
};

export default Album;
