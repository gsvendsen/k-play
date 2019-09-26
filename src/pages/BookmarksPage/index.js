import React, { useState, useContext } from 'react';

import MenuOption from '../../components/MenuOption';
import MediaCard from '../../components/MediaCard';

import videos from '../../data/youtube.json';
import {
  formatDuration,
  YTDurationToSeconds,
  toggleBookmark
} from '../../helpers/functions';
import { NotificationMessagesContext } from '../../contexts/NotificationMessagesContext';

const BookmarksPage = () => {
  const { notificationMessage, setNotificationMessage } = useContext(
    NotificationMessagesContext
  );

  let megaData =
    JSON.parse(localStorage.getItem('userData')) &&
    JSON.parse(localStorage.getItem('userData')).bookmarks
      ? JSON.parse(localStorage.getItem('userData')).bookmarks
      : [];

  const [filterState, setFilterState] = useState('all');

  console.log(megaData);

  // Filter Type of media
  megaData = megaData.filter(item => {
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

  return (
    <div style={{ minHeight: '100vh', padding: '30px 0 0 0' }}>
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

      <h2
        style={{
          fontSize: '16px',
          lineHeight: '21px',
          fontWeight: 'normal',
          color: '#FFFFFF'
        }}
      >
        {megaData.length > 0
          ? 'Dina bokmärken'
          : 'Du har inte sparat några bokmärken ännu'}
      </h2>
      <div>
        {megaData.map(video => {
          return (
            <MediaCard
              vertical
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
                toggleBookmark(video);
                setNotificationMessage({
                  message: 'Videon har tagits bort från ditt bibliotek',
                  duration: 4
                });
              }}
              duration={
                video.type === 'video'
                  ? formatDuration(YTDurationToSeconds(video.duration))
                  : formatDuration(video.duration / 1000)
              }
              height="100%"
              margin="25px 0"
            ></MediaCard>
          );
        })}
      </div>
    </div>
  );
};

export default BookmarksPage;
