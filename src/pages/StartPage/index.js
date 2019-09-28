import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import HeaderCard from '../../components/HeaderCard';
import MenuOption from '../../components/MenuOption';

import videos from '../../data/youtube.json';
import tracks from '../../data/tracks.json';

import { news, recommended, latest } from '../../data/startscreen.js';

import { NotificationMessagesContext } from '../../contexts/NotificationMessagesContext';

import {
  formatDuration,
  YTDurationToSeconds,
  toggleBookmark,
  filterMediaTypes
} from '../../helpers/functions';

const miniData = [...videos, ...tracks];

const StartPage = () => {
  const [filterState, setFilterState] = useState('all');
  const { notificationMessage, setNotificationMessage } = useContext(
    NotificationMessagesContext
  );
  const [localData, setLocalData] = useState(
    localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData')).watchHistory
      : null
  );
  const [watchedVideos, setWatchedVideos] = useState([]);

  // Sets watched videos used from localStorage
  useEffect(() => {
    if (localData) {
      setWatchedVideos(
        miniData.filter(video => {
          const matchedVideo = localData.filter(localVideo => {
            return localVideo.id === video.id;
          });

          if (matchedVideo.length > 0) {
            return true;
          } else {
            return false;
          }
        })
      );
    }

  }, [filterState]);

  return (
    <div style={{ padding: '30px 0 0 0' }}>
      <div style={{ display: 'flex', margin: '0 0 20px 0' }}>
        <MenuOption
          isActive={filterState === 'all'}
          onSelect={() => setFilterState('all')}
          title="Visa alla"
        />
        <MenuOption
          isActive={filterState === 'podcast'}
          onSelect={() => setFilterState('podcast')}
          title="Ljud"
        />
        <MenuOption
          isActive={filterState === 'video'}
          onSelect={() => setFilterState('video')}
          title="Videos"
        />
      </div>
      {filterState === 'video' || filterState === 'all' ?
      <HeaderCard title='Johanna Koljonen – “Do or Die”' imageUrl="https://i.imgur.com/eQ5vJvb.png" url="/avsnitt/arPKOLILtkk" /> :
      <HeaderCard title='Europeiska Samarbetsprojekt' imageUrl="https://i.imgur.com/wVkiw4a.png" url="/avsnitt/624108684" />
      }
      
      {watchedVideos.length > 0 && (
        <SideScrollContainer label="Fortsätt uppspelning">
          {watchedVideos.map(video => {
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
                  const updatedData = {
                    watchHistory: [
                      ...JSON.parse(
                        localStorage.getItem('userData')
                      ).watchHistory.filter(media => {
                        return media.id !== id;
                      })
                    ],
                    bookmarks: JSON.parse(localStorage.getItem('userData')).bookmarks
                  };

                  localStorage.setItem('userData', JSON.stringify(updatedData));

                  setWatchedVideos(
                    watchedVideos.filter(video => {
                      return video.id !== id;
                    })
                  );
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
      )}

      <SideScrollContainer label="Nyheter">
        {filterMediaTypes(filterState, news).map(video => {
          return (
            <MediaCard
              data={video}
              key={video.id}
              id={video.id}
              title={video.title}
              url={`/avsnitt/${video.id}`}
              mediaIcon={
                video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'
              }
              ctaIcon={
                JSON.parse(localStorage.getItem('userData')) &&
                JSON.parse(localStorage.getItem('userData')).bookmarks &&
                JSON.parse(localStorage.getItem('userData')).bookmarks.filter(
                  bookmark => bookmark.id === video.id
                ).length > 0
                  ? './svg/bookmark-filled.svg'
                  : '/svg/bookmark.svg'
              }
              ctaAction={id => {
                let bookmarked = toggleBookmark(video);
                setNotificationMessage({
                  message: bookmarked
                    ? 'Videon har sparats till ditt bibliotek'
                    : 'Videon har tagits bort från ditt bibliotek',
                  duration: 4,
                  icon:
                    JSON.parse(localStorage.getItem('userData')) &&
                    JSON.parse(localStorage.getItem('userData')).bookmarks &&
                    JSON.parse(
                      localStorage.getItem('userData')
                    ).bookmarks.filter(bookmark => bookmark.id === video.id)
                      .length > 0
                      ? './svg/bookmark-filled.svg'
                      : '/svg/bookmark.svg'
                });
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

      <SideScrollContainer label="Populärast just nu">
        {filterMediaTypes(filterState, latest).map(video => {
            console.log(video.title)
            
          return (
            <MediaCard
              data={video}
              key={video.id}
              id={video.id}
              title={video.title}
              url={`/avsnitt/${video.id}`}
              mediaIcon={
                video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'
              }
              ctaIcon={
                JSON.parse(localStorage.getItem('userData')) &&
                JSON.parse(localStorage.getItem('userData')).bookmarks &&
                JSON.parse(localStorage.getItem('userData')).bookmarks.filter(
                  bookmark => bookmark.id === video.id
                ).length > 0
                  ? './svg/bookmark-filled.svg'
                  : '/svg/bookmark.svg'
              }
              ctaAction={id => {
                let bookmarked = toggleBookmark(video);
                setNotificationMessage({
                  message: bookmarked
                    ? 'Videon har sparats till ditt bibliotek'
                    : 'Videon har tagits bort från ditt bibliotek',
                  duration: 4,
                  icon:
                    JSON.parse(localStorage.getItem('userData')) &&
                    JSON.parse(localStorage.getItem('userData')).bookmarks &&
                    JSON.parse(
                      localStorage.getItem('userData')
                    ).bookmarks.filter(bookmark => bookmark.id === video.id)
                      .length > 0
                      ? './svg/bookmark-filled.svg'
                      : '/svg/bookmark.svg'
                });
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

      <SideScrollContainer label="Rekommenderade">
        {filterMediaTypes(filterState, recommended).map(video => {
          return (
            <MediaCard
              data={video}
              key={video.id}
              id={video.id}
              title={video.title}
              url={`/avsnitt/${video.id}`}
              mediaIcon={
                video.type === 'video' ? '/svg/video.svg' : '/svg/audio.svg'
              }
              ctaIcon={
                JSON.parse(localStorage.getItem('userData')) &&
                JSON.parse(localStorage.getItem('userData')).bookmarks &&
                JSON.parse(localStorage.getItem('userData')).bookmarks.filter(
                  bookmark => bookmark.id === video.id
                ).length > 0
                  ? './svg/bookmark-filled.svg'
                  : '/svg/bookmark.svg'
              }
              ctaAction={id => {
                let bookmarked = toggleBookmark(video);
                setNotificationMessage({
                  message: bookmarked
                    ? 'Videon har sparats till ditt bibliotek'
                    : 'Videon har tagits bort från ditt bibliotek',
                  duration: 4,
                  icon:
                    JSON.parse(localStorage.getItem('userData')) &&
                    JSON.parse(localStorage.getItem('userData')).bookmarks &&
                    JSON.parse(
                      localStorage.getItem('userData')
                    ).bookmarks.filter(bookmark => bookmark.id === video.id)
                      .length > 0
                      ? './svg/bookmark-filled.svg'
                      : '/svg/bookmark.svg'
                });
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
    </div>
  );
};

export default StartPage;
