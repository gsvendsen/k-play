import React, { useState, useContext } from 'react';
import YouTube from 'react-youtube';
import { NotificationMessagesContext } from '../../contexts/NotificationMessagesContext';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';
import VideoContainer from '../../components/VideoContainer';
import SideScrollContainer from '../../components/SideScrollContainer';
import MediaCard from '../../components/MediaCard';
import { VideoDescriptionStyle } from './VideoDescriptionStyle';
import videos from '../../data/youtube.json';
import tracks from '../../data/tracks.json';
import { formatDuration, YTDurationToSeconds } from '../../helpers/functions';
import { whileStatement } from '@babel/types';
import AudioPlayer from '../../components/AudioPlayer';

const episodeData = {
  id: 'Nmf2V55mlgw',
  title: 'Masterclass med Pia Olby - Vad är skönsång (del 3 av 4)',
  description:
    'Kulturakademin och Teateralliansens kursen i sånggestaltning erbjuder professionella skådespelare möjlighet att arbeta med och utveckla sin egen vokala och musikaliska potential - och att utmana sig själva sångmässigt. Här förklarar kursledare Pia Olby vad skönsång är för henne.',
  url: 'http://youtube.com/watch?w=Nmf2V55mlgw',
  thumbnail: 'https://i.ytimg.com/vi/Nmf2V55mlgw/hqdefault.jpg',
  tags: ['dans', 'teater', 'scenkonst', 'koreografi', 'film'],
  duration: 'PT2M1S',
  type: 'video'
};

const EpisodePage = props => {
  const megaData = [...tracks, ...videos];

  console.log(megaData);

  const videoId = props.location.pathname.split('/')[2] || null;

  const videoData = megaData.find(video => {
    return videoId.toString() === video.id.toString();
  });

  const [isBookmarkToggled, setBookmarkToggle] = useState(false);
  const { notificationMessage, setNotificationMessage } = useContext(
    NotificationMessagesContext
  );

  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  // console.log(audioPlayerUrl);

  return (
    <div>
      {videoData === undefined ? (
        <p
          style={{
            color: 'white',
            fontSize: '18px',
            textAlign: 'center',
            margin: '50px 0'
          }}
        >
          Avsnitt med ID "{videoId}" finns inte.
        </p>
      ) : (
        <VideoContainer>
          <section>
            {videoData.type === 'video' ? (
              <YouTube videoId={videoData.id} />
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
                    `http://api.soundcloud.com/tracks/${videoData.id}/stream?client_id=1zsDz22qtfrlBg2rdkko9EahD3GiJ996`
                  ).then(res => {
                    // TEMPORÄR CONTEXT STRUKTUR
                    console.log(res);
                    setAudioPlayerUrl(null);

                    setTimeout(() => {
                      setAudioPlayerUrl({
                        audioData: videoData,
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
                    alignItems: 'center'
                  }}
                >
                  <img src="/svg/playbutton.svg" alt="Play" />
                </div>
              </div>
            )}
          </section>
          <VideoDescriptionStyle>
            <aside>
              <h1>{videoData.title}</h1>
              {!isBookmarkToggled ? (
                <img
                  onClick={() => {
                    setNotificationMessage({
                      message: 'Bookmarked!',
                      duration: 4
                    });
                    setBookmarkToggle(true);
                  }}
                  src="/svg/bookmark.svg"
                  alt="Bookmark"
                />
              ) : (
                <img
                  onClick={() => setBookmarkToggle(false)}
                  src="/svg/bookmark-filled.svg"
                  alt="Bookmarked"
                />
              )}
            </aside>
            <h4>Torsdag 12 sep 12.00 -- 40 min</h4>
            <p>{videoData.description}</p>
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
              mediaIcon={'/svg/video.png'}
              ctaIcon={'/svg/bookmark.svg'}
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
