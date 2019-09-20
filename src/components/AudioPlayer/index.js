import React, { useContext, useState, useEffect } from 'react';
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import { Link } from 'react-router-dom';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

import { AudioPlayerStyle } from './AudioPlayerStyle';
import { log } from 'util';

const AudioPlayer = withCustomAudio(props => {

    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem('userData')))

  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  let {
    streamUrl,
    soundCloudAudio,
    track,
    duration,
    currentTime,
    isReady,
    data,
    onFastForward
  } = props;

  const [canAutoPlay, setCanAutoPlay] = useState(true);
  const [initalStartTime, setInitialStartTime] = useState(JSON.parse(localStorage.getItem('userData')).watchHistory.find((video => video.id === data.id)) && JSON.parse(localStorage.getItem('userData')).watchHistory.find((video => video.id === data.id)).progress || null)

  useEffect(() => {
    
    soundCloudAudio.play();
    
    if(initalStartTime){
        soundCloudAudio.audio.currentTime = initalStartTime
    }

    setCanAutoPlay(false);
    
    setInterval(() => { 
        if(soundCloudAudio && !soundCloudAudio.audio.paused){
            if(soundCloudAudio.audio.currentTime > 10 && duration) {
                console.log('yea')
                const updatedData = {
                    watchHistory: [
                        ...localData.watchHistory.filter((media) => {
                            return media.id !== data.id
                        }),
                        {
                            id:data.id,
                            duration:Math.round(duration),
                            progress:Math.round(soundCloudAudio.audio.currentTime-1)
                        }
                    ]
                } 

                localStorage.setItem('userData', JSON.stringify(updatedData))

            }

            if(duration - soundCloudAudio.audio.currentTime < 15) {
                const updatedData = {
                    watchHistory: [
                        ...localData.watchHistory.filter((media) => {
                            return media.id !== data.id
                        })
                    ]
                }

                localStorage.setItem('userData', JSON.stringify(updatedData))

            }

        }
    }, 1000)
        
  }, [isReady, canAutoPlay, soundCloudAudio, duration, localData]);

  let episodeTitle = data.title.split(' ');
  episodeTitle.shift();

  return (
    <AudioPlayerStyle
      currentTime={currentTime}
      duration={duration}
      isActive={true}
      {...props}
    >
      <Progress
        duration={data ? data.duration / 1000 : 0}
        currentTime={currentTime}
        {...props}
      />
      {!props.big && (
        <Link to={`/avsnitt/${data.id}`}>
          <p>
            {data
              ? episodeTitle.join(' ').length > 50
                ? episodeTitle.join(' ').slice(0, 50) + '...'
                : episodeTitle.join(' ')
              : 'Loading...'}
          </p>
        </Link>
      )}
      <button
        onClick={() => {
          soundCloudAudio.audio.currentTime -= 15;
          if (soundCloudAudio.audio.currentTime < 0) {
            soundCloudAudio.audio.currentTime = 0;
          }
        }}
      >
        <img src="/svg/back15s.svg" alt="" />
        15s
      </button>
      <button
        onClick={() => {
          soundCloudAudio.audio.currentTime += 15;
          if (
            soundCloudAudio.audio.currentTime > soundCloudAudio.audio.duration
          ) {
            soundCloudAudio.audio.currentTime = 0;
            soundCloudAudio.pause();
          }
        }}
      >
        15s
        <img src="/svg/forward15s.svg" alt="" />
      </button>
      <PlayButton {...props} />
    </AudioPlayerStyle>
  );
});

const PodPlayer = (props, { id }) => {
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {!loading && audioPlayerUrl && (
        <AudioPlayer
          big={props.big}
          clientId={''}
          streamUrl={audioPlayerUrl.streamUrl}
          data={audioPlayerUrl.audioData}
          currentTime={15}
        />
      )}
    </div>
  );
};

export default PodPlayer;
