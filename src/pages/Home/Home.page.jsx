import { Homepage, Title } from './Home.styles.js';
import VideoList from '../../components/VideoList';

const HomePage = () => {
  return (
    <Homepage>
      <Title>Fira Player</Title>
      <VideoList />
    </Homepage>
  );
};

export default HomePage;
