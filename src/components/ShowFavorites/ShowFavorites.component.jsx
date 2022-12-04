import { FavContainer } from '../ShowFavorites/ShowFavorites.styles';
import FavCard from '../FavCard';

const ShowFavorites = () => {
  let favorites = [];
  if (localStorage.getItem('favorites')) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  }

  return (
    <FavContainer>
      {favorites.length < 1 ? (
        <h2>No videos in your favorites yet!</h2>
      ) : (
        favorites.map((item) => <FavCard key={item.videoId} {...item.info} />)
      )}
    </FavContainer>
  );
};

export default ShowFavorites;
