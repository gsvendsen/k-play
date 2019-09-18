import React, { useContext, useState, useEffect } from 'react';
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

import { AudioPlayerStyle } from './AudioPlayerStyle';
import { log } from 'util';

const AudioPlayer = withCustomAudio(props => {
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

  useEffect(() => {
    soundCloudAudio.play();
    setCanAutoPlay(false);
  }, [isReady, canAutoPlay, soundCloudAudio]);

  console.log(props);

  let episodeTitle = data.title.split(' ');
  episodeTitle.shift();

  return (
    <AudioPlayerStyle
      currentTime={currentTime}
      duration={duration}
      isActive={audioPlayerUrl}
      {...props}
    >
      <Progress
        duration={data ? data.duration / 1000 : 0}
        currentTime={currentTime}
        {...props}
      />
      <p>
        {data
          ? episodeTitle.join(' ').length > 50
            ? episodeTitle.join(' ').slice(0, 50) + '...'
            : episodeTitle.join(' ')
          : 'Loading...'}
      </p>
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

const PodPlayer = ({ id }) => {
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [progress, setProgress] = useState(0);

  return (
    <div>
      {!loading && audioPlayerUrl && (
        <AudioPlayer
          clientId={''}
          streamUrl={audioPlayerUrl.streamUrl}
          data={audioPlayerUrl.audioData}
          currentTime={15}
          onFastForward={() => {
            console.log(progress);
            setProgress(progress + 15);
          }}
        />
      )}
    </div>
  );
};

export default PodPlayer;
