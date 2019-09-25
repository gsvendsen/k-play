import React, { useState, useContext, useEffect } from 'react';
import YouTube from 'react-youtube';
import { NotificationMessagesContext } from '../../contexts/NotificationMessagesContext';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';
import VideoContainer from '../../components/VideoContainer';
import SideScrollContainer from '../../components/SideScrollContainer';
import RedirectBox from '../../components/RedirectBox';
import MediaCard from '../../components/MediaCard';
import { VideoDescriptionStyle } from './VideoDescriptionStyle';
import videos from '../../data/youtube.json';
import tracks from '../../data/tracks.json';
import {
  formatDuration,
  YTDurationToSeconds,
  toggleBookmark
} from '../../helpers/functions';

const EpisodePage = props => {
  const megaData = [...tracks, ...videos];

  const [videoPlayer, setVideoPlayer] = useState(null);
  const [videoDuration, setVideoDuration] = useState(null);
  const [videoInitiated, setVideoInitiated] = useState(false);

  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );

  const mediaId = props.location.pathname.split('/')[2] || null;
  const mediaData = megaData.find(media => {
    return mediaId.toString() === media.id.toString();
  });

  const [isBookmarkToggled, setBookmarkToggle] = useState(false);
  const { notificationMessage, setNotificationMessage } = useContext(
    NotificationMessagesContext
  );
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  const [initalStartTime, setInitialStartTime] = useState(
    localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData')).watchHistory &&
      JSON.parse(localStorage.getItem('userData')).watchHistory.find(
        video => video.id === mediaId
      )
      ? JSON.parse(localStorage.getItem('userData')).watchHistory.find(
          video => video.id === mediaId
        ).progress
      : null
  );

  useEffect(() => {
    setInterval(() => {
      if (videoPlayer && videoPlayer.a && videoPlayer.getPlayerState() === 1) {
        if (videoPlayer.getCurrentTime() > 10 && videoDuration) {
          const updatedData = {
            watchHistory: [
              ...localData.watchHistory.filter(media => {
                return media.id !== mediaId;
              }),
              {
                id: mediaId,
                duration: videoDuration,
                progress: Math.round(videoPlayer.getCurrentTime() - 1)
              }
            ],
            bookmarks: localData.bookmarks
          };

          localStorage.setItem('userData', JSON.stringify(updatedData));
        }

        if (videoDuration - videoPlayer.getCurrentTime() < 15) {
          const updatedData = {
            watchHistory: [
              ...localData.watchHistory.filter(media => {
                return media.id !== mediaId;
              })
            ],
            bookmarks: localData.bookmarks
          };

          localStorage.setItem('userData', JSON.stringify(updatedData));
        }
      }
    }, 1000);
  }, [videoPlayer, videoDuration, localData]);

  return (
    <div style={{ minHeight: '100vh' }}>
      {mediaData === undefined ? (
        <p
          style={{
            color: 'white',
            fontSize: '18px',
            textAlign: 'center',
            margin: '50px 0'
          }}
        >
          Avsnitt med ID "{mediaId}" finns inte.
        </p>
      ) : (
        <VideoContainer>
          <section>
            {mediaData.type === 'video' ? (
              <YouTube
                videoId={mediaData.id}
                onReady={event => {
                  setVideoDuration(event.target.getDuration());
                  setVideoPlayer(event.target);
                }}
                onPlay={event => {
                  setAudioPlayerUrl(null);

                  if (initalStartTime && !videoInitiated) {
                    event.target.seekTo(initalStartTime);
                    setVideoInitiated(true);
                  }
                }}
              />
            ) : (
              <div
                style={{
                  top: '0',
                  background: '#343434',
                  width: '100%',
                  position: 'absolute',
                  left: '0',
                  height: '100%',
                  border: '15px solid #1b1b1b',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => {
                  fetch(
                    `https://api.soundcloud.com/tracks/${mediaData.id}/stream?client_id=1zsDz22qtfrlBg2rdkko9EahD3GiJ996`
                  ).then(res => {
                    // TEMPORÄR CONTEXT STRUKTUR
                    setAudioPlayerUrl(null);

                    setTimeout(() => {
                      setAudioPlayerUrl({
                        audioData: mediaData,
                        streamUrl: res.url
                      });
                    }, 250);
                  });
                }}
              >
                <div
                  style={{
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    background: '#1b1b1b',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1px 4px 0 0'
                  }}
                  onClick={() => {
                    fetch(
                      `https://api.soundcloud.com/tracks/${mediaData.id}/stream?client_id=1zsDz22qtfrlBg2rdkko9EahD3GiJ996`
                    ).then(res => {
                      // TEMPORÄR CONTEXT STRUKTUR
                      setAudioPlayerUrl(null);

                      setTimeout(() => {
                        setAudioPlayerUrl({
                          audioData: mediaData,
                          streamUrl: res.url
                        });
                      }, 250);
                    });
                  }}
                >
                  <img src="/svg/playbutton.svg" alt="Play" />
                </div>
              </div>
            )}
          </section>
          <VideoDescriptionStyle>
            <aside>
              <h1>{mediaData.title}</h1>
              <img
                onClick={() => {
                  let bookmarked = toggleBookmark(mediaData);
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
                      ).bookmarks.filter(
                        bookmark => bookmark.id === mediaData.id
                      ).length > 0
                        ? '/svg/bookmark-filled.svg'
                        : '/svg/bookmark.svg'
                  });
                }}
                src={
                  JSON.parse(localStorage.getItem('userData')) &&
                  JSON.parse(localStorage.getItem('userData')).bookmarks &&
                  JSON.parse(localStorage.getItem('userData')).bookmarks.filter(
                    bookmark => bookmark.id === mediaData.id
                  ).length > 0
                    ? '/svg/bookmark-filled.svg'
                    : '/svg/bookmark.svg'
                }
                alt="Bookmark"
              />
            </aside>
            <h4>
              Torsdag 12 sep 12.00 -{' '}
              {videoDuration && formatDuration(videoDuration)}
            </h4>
            <p>{mediaData.description}</p>
            <RedirectBox
              title="Kursmaterial"
              href="https://www.kursmateriallank.se/material"
              linkTitle="www.kursmateriallank.se/material"
            ></RedirectBox>
          </VideoDescriptionStyle>
        </VideoContainer>
      )}
      <SideScrollContainer label="Liknande Avsnitt">
        {videos.map(video => {
          return (
            <MediaCard
              key={video.id}
              id={video.id}
              title={video.title}
              data={video}
              url={`/avsnitt/${video.id}`}
              mediaIcon={'/svg/video.svg'}
              ctaIcon={
                JSON.parse(localStorage.getItem('userData')) &&
                JSON.parse(localStorage.getItem('userData')).bookmarks &&
                JSON.parse(localStorage.getItem('userData')).bookmarks.filter(
                  bookmark => bookmark.id === video.id
                ).length > 0
                  ? '/svg/bookmark-filled.svg'
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
              duration={formatDuration(YTDurationToSeconds(video.duration))}
              height="100%"
              margin="0% 5% 0 0"
            ></MediaCard>
          );
        })}
      </SideScrollContainer>
    </div>
  );
};

export default EpisodePage;
