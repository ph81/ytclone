import Card from '../Card';
import {
  StyledCardBody,
  StyledCardContainer,
} from '../VideoCard/VideoCard.styles';

const VideoCard = (item) => {
  const video = {
    id: item.id.videoId,
    title: item.snippet.title,
    date: item.snippet.date,
    description: item.snippet.description,
    photo_url: item.snippet.thumbnails.medium.url,
  };

  return (
    <StyledCardBody>
      <StyledCardContainer>
        <Card key={video.id} {...video} />
      </StyledCardContainer>
    </StyledCardBody>
  );
};

export default VideoCard;
