import React from 'react';
import { Link } from 'react-router-dom';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import videos from '../../data/youtube.json';
import { formatDuration, YTDurationToSeconds } from '../../helpers/functions';

const StartPage = () => {
  return (
    <div>
      <h1>Start Page</h1>
      <Link to="./avsnitt">Avsnitt</Link>
      <SideScrollContainer label="Forsätt titta">
        {videos.map(video => {
          return (
            <MediaCard
              key={video.id}
              id={video.id}
              title={video.title}
              mediaIcon={'./svg/video.png'}
              ctaIcon={'./svg/cross.png'}
              duration={formatDuration(YTDurationToSeconds(video.duration))}
              height="100%"
              margin="0% 5% 0 0"
            ></MediaCard>
          );
        })}
        {/* <MediaCard height="100%" margin="0% 5% 0 0"></MediaCard>
        <MediaCard height="100%" margin="0% 5% 0 0"></MediaCard>
        <MediaCard height="100%" margin="0% 5% 0 0"></MediaCard>
        <MediaCard height="100%" margin="0% 5% 0 0"></MediaCard> */}
      </SideScrollContainer>
    </div>
  );
};

export default StartPage;
