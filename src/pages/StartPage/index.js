import React, {useState} from 'react';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import MenuOption from '../../components/MenuOption';

import videos from '../../data/youtube.json';
import tracks from '../../data/tracks.json';

import { formatDuration, YTDurationToSeconds } from '../../helpers/functions';

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
    </div>
  );
};

export default StartPage;
