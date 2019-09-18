import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import MenuOption from '../../components/MenuOption';

import videos from '../../data/youtube.json';
import tracks from '../../data/tracks.json';

import { formatDuration, YTDurationToSeconds } from '../../helpers/functions';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

const miniData = [...videos, ...tracks]

const StartPage = () => {

const [filterState, setFilterState] = useState('all')

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}


let megaData = shuffle(miniData)

megaData = megaData.filter((item) => {
    if (filterState === 'all'){
        return true
    }

    if (item.type === 'video' && filterState === 'video'){
        return true
    }

    if (item.type === 'podcast' && filterState === 'podcast'){
        return true
    }
})

  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  return (
    <div style={{padding:'30px 0 0 0'}}>
        <div style={{display:'flex'}}>
      <MenuOption isActive={filterState === 'all'} onSelect={() => setFilterState('all')} title="View All" />
      <MenuOption isActive={filterState === 'podcast'} onSelect={() => setFilterState('podcast')} title="Podcasts" />
      <MenuOption isActive={filterState === 'video'} onSelect={() => setFilterState('video')} title="Videos" />
      </div>
      <SideScrollContainer label="Forsätt titta">
        {videos.map(video => {
          return (
            <MediaCard
              key={video.id}
              id={video.id}
              title={video.title}
              data={video}
              url={`/avsnitt/${video.id}`}
              mediaIcon={'./svg/video.png'}
              ctaIcon={'./svg/cross.png'}
              duration={formatDuration(YTDurationToSeconds(video.duration))}
              height="100%"
              margin="0% 5% 0 0"
            ></MediaCard>
          );
        })}
      </SideScrollContainer>

      <SideScrollContainer label="Mest spelade just nu">
        {megaData.map(video => {
            
          return (
            <MediaCard
              data={video}
              key={video.id}
              id={video.id}
              title={video.title}
              url={`/avsnitt/${video.id}`}
              mediaIcon={video.type === 'video' ? '/svg/video.png' : '/svg/audio.svg'}
              ctaIcon={'./svg/bookmark.svg'}
              duration={video.type === 'video' ? formatDuration(YTDurationToSeconds(video.duration)) : formatDuration(video.duration/1000)}
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
