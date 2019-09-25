import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
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
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

const miniData = [...videos, ...tracks];

const CategoryPage = () => {
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

      <h1
        style={{
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '119.5%',
          letterSpacing: '0.01em',
          color: '#FFFFFF'
        }}
      >
        Musik och sånggestaltning
      </h1>
      <h2
        style={{
          fontWeight: 'normal',
          fontSize: '18px',
          lineHeight: '23px',
          letterSpacing: '0.03em',
          color: '#FFFFFF',
          margin: '10px 0 40px 0'
        }}
      >
        Underkategori{' '}
      </h2>

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
                toggleBookmark(video);
                setNotificationMessage({
                  message: 'Videon har sparats till ditt bibliotek',
                  duration: 4
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

      <SideScrollContainer label="Underkategori">
        {filterMediaTypes(filterState, latest).map(video => {
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
                toggleBookmark(video);
                setNotificationMessage({
                  message: 'Videon har sparats till ditt bibliotek',
                  duration: 4
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
                toggleBookmark(video);
                setNotificationMessage({
                  message: 'Videon har sparats till ditt bibliotek',
                  duration: 4
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

export default CategoryPage;
