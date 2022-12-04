import { FavSection, FavTitle } from './Favorites.styles';
import ShowFavorites from '../../components/ShowFavorites';

const FavoritesPage = () => {
  return (
    <FavSection>
      <FavTitle>Your favorite videos</FavTitle>
      <ShowFavorites />
    </FavSection>
  );
};

export default FavoritesPage;
