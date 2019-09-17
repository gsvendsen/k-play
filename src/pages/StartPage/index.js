import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import videos from '../../data/youtube.json';
import { formatDuration, YTDurationToSeconds } from '../../helpers/functions';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

const StartPage = () => {
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
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
              mediaIcon={'./svg/video.svg'}
              ctaIcon={'./svg/cross.svg'}
              duration={formatDuration(YTDurationToSeconds(video.duration))}
              height="100%"
              margin="0% 5% 0 0"
            ></MediaCard>
          );
        })}
      </SideScrollContainer>
      <button
        onClick={() => {
          setAudioPlayerUrl(
            'https://cf-media.sndcdn.com/JxAp6sn9czy8.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vSnhBcDZzbjljenk4LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1Njg3MTEzMjJ9fX1dfQ__&Signature=G1VYQb7N7tdYq8gweA~6EjBFIYMlH6ox7Ao2G4eHB7tJjkdXl4wqD0eyipX-XRJKuXIa2zl1yc2qblX3E~siG2zzT621RrMn6rvfkueyILjn8l07ZswlYYRcO4s~UC4osFz5tQYX3syOCKT8PIBUUgGhYL9chp5SjCVzxY3n7J93IAbgR5EivQ4KwJy1hYghSTz9ORAZsy4iLGB2MSIG7Av5JMkIgt8axcDysqFZuxIS8-c6XPR7Ce34FHw6FGdmIuqXu8DgAVf1OS5~PKJ2NJ0bYxFICIJiaPIqgp3iyxlDBh31pfnrZD1BuMSNQwvMREC7yxogY-W9Wr8~hEnfcg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
          );
        }}
      >
        Play
      </button>
    </div>
  );
};

export default StartPage;
