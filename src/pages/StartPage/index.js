import React from 'react';
import { Link } from 'react-router-dom';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import videos from '../../data/youtube.json';

const StartPage = () => {
  return (
    <div>
      <h1>Start Page</h1>
      <Link to="./avsnitt">Avsnitt</Link>
      <SideScrollContainer label="Forsätt titta">
        {videos.map(video => (
          <MediaCard
            id={video.id}
            title={video.title.substr(0, 25)}
            height="100%"
            margin="0% 5% 0 0"
          ></MediaCard>
        ))}
        {/* <MediaCard height="100%" margin="0% 5% 0 0"></MediaCard>
        <MediaCard height="100%" margin="0% 5% 0 0"></MediaCard>
        <MediaCard height="100%" margin="0% 5% 0 0"></MediaCard>
        <MediaCard height="100%" margin="0% 5% 0 0"></MediaCard> */}
      </SideScrollContainer>
    </div>
  );
};

export default StartPage;
