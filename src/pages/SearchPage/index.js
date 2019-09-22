import React, {useState} from 'react';

import MenuOption from '../../components/MenuOption';
import SearchBar from '../../components/SearchBar';
import MediaCard from '../../components/MediaCard';
import SideScrollContainer from '../../components/SideScrollContainer';
import Tag from '../../components/Tag';

import videos from '../../data/youtube.json'
import tracks from '../../data/tracks.json'

import { formatDuration, YTDurationToSeconds, toggleBookmark} from '../../helpers/functions';

let megaData = [...videos, ...tracks];

const SearchPage = () => {

  const [filterState, setFilterState] = useState('all');

  const [searchValue, setSearchValue] = useState('')

  // Filter Type of media
  let miniData = megaData.filter(item => {
    if (filterState === 'all') {
      return true;
    }

    if (item.type === 'video' && filterState === 'video') {
      return true;
    }

    if (item.type === 'podcast' && filterState === 'podcast') {
      return true;
    }
  });

  miniData = miniData.filter(item => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase())
  })

  let tagArray = miniData.map(item => {
      return item.tags
  })

  let goodTags = searchValue !== '' ? [...new Set(tagArray.flat())] : [];
  goodTags.length = 5
  console.log(goodTags);
  
  

  return (
    <div style={{ padding: '30px 0 0 0' }}>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div style={{ display: 'flex', margin: '0 0 20px 0' }}>
        <MenuOption
          isActive={filterState === 'all'}
          onSelect={() => setFilterState('all')}
          title="Visa Alla"
        />
        <MenuOption
          isActive={filterState === 'podcast'}
          onSelect={() => setFilterState('podcast')}
          title="Podcasts"
        />
        <MenuOption
          isActive={filterState === 'video'}
          onSelect={() => setFilterState('video')}
          title="Videos"
        />
      </div>

      {searchValue !== '' ? (
        <SideScrollContainer label={`Visar resultat för "${searchValue}"`}>
          {miniData.map(video => {
            return (
              <MediaCard
                key={video.id}
                id={video.id}
                title={video.title}
                data={video}
                url={`/avsnitt/${video.id}`}
                mediaIcon={
                  video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'
                }
                ctaIcon={'/svg/bookmark.svg'}
                ctaAction={id => {

                }}
                duration={
                  video.type === 'video'
                    ? formatDuration(YTDurationToSeconds(video.duration))
                    : formatDuration(video.duration / 1000)
                }
                height="100%"
                margin="0% 5% 0 0"
              ></MediaCard>
            );
          })}
        </SideScrollContainer>
      ) : 
      <SideScrollContainer label={`Dina tidigare sökningar`}>
                {megaData.map(video => {
                    return (
                    <MediaCard
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        data={video}
                        url={`/avsnitt/${video.id}`}
                        mediaIcon={
                        video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'
                        }
                        ctaIcon={'/svg/cross.svg'}
                        ctaAction={id => {

                        }}
                        duration={
                        video.type === 'video'
                            ? formatDuration(YTDurationToSeconds(video.duration))
                            : formatDuration(video.duration / 1000)
                        }
                        height="100%"
                        margin="0% 5% 0 0"
                    ></MediaCard>
                    );
                })}
                </SideScrollContainer>
      
      }

      <div style={{
          display:'flex',
          width:'100%',
          flexWrap:'wrap',
          justifyContent:'flex-start',
          marginBottom:'15px'
      }}>
          {goodTags.map(tag => {
              return <Tag searchTag={() => setSearchValue(tag)} title={tag} />
          })}
      </div>

        {searchValue !== '' &&
        <SideScrollContainer label={`Andra sökte även efter`}>
                {megaData.map(video => {
                    return (
                    <MediaCard
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        data={video}
                        url={`/avsnitt/${video.id}`}
                        mediaIcon={
                        video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'
                        }
                        ctaIcon={'/svg/bookmark.svg'}
                        ctaAction={id => {

                        }}
                        duration={
                        video.type === 'video'
                            ? formatDuration(YTDurationToSeconds(video.duration))
                            : formatDuration(video.duration / 1000)
                        }
                        height="100%"
                        margin="0% 5% 0 0"
                    ></MediaCard>
                    );
                })}
                </SideScrollContainer>}
    </div>
  );
}

export default SearchPage;
