export function usersFetchDataSuccess(data) {
  return {
    type: "FETCH_USERS_SUCCESS",
    data
  }
}

export function usersFetchData() {
  return async (dispatch) => {
    try {
      const urlUsers = 'https://jsonplaceholder.typicode.com/users';
      const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
      const urlAlbums = 'https://jsonplaceholder.typicode.com/albums';

      const [usersResponse, photosResponse, albumsResponse] = await Promise.all([
        fetch(urlUsers),
        fetch(urlPhotos),
        fetch(urlAlbums)
      ]);

      if (!usersResponse.ok || !photosResponse.ok || !albumsResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const [users, photos, albums] = await Promise.all([
        usersResponse.json(),
        photosResponse.json(),
        albumsResponse.json()
      ]);


      const usersWithAlbumsAndPhotos = users.map(user => {
        const userAlbums = albums.filter(album => album.userId === user.id);
        const userPhotos = photos.filter(photo => userAlbums.some(album => album.id === photo.albumId));

        // Распределение фотографий по альбомам
        const albumsWithPhotos = userAlbums.map(album => {
          const albumPhotos = userPhotos.filter(photo => photo.albumId === album.id);
          return { ...album, photos: albumPhotos };
        });

        return {
          ...user,
          albums: albumsWithPhotos
        };
      });

      dispatch(usersFetchDataSuccess(usersWithAlbumsAndPhotos));
    } catch (error) { }
  };
}
