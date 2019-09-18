import React, { useContext, useState, useEffect } from 'react';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

import { AudioPlayerStyle } from './AudioPlayerStyle';

const AudioPlayer = withCustomAudio(props => {
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  let {
    streamUrl,
    soundCloudAudio,
    track,
    duration,
    currentTime,
    isReady,
    data
  } = props;

  const [canAutoPlay, setCanAutoPlay] = useState(true);

  useEffect(() => {
    soundCloudAudio.play();
    setCanAutoPlay(false);
  }, [isReady, canAutoPlay, soundCloudAudio]);

  return (
    <AudioPlayerStyle isActive={audioPlayerUrl} {...props}>
      <p>{data ? data.title : 'Loading...'}</p>
      <button>
        <img src="/svg/back15s.svg" alt="" />
        15s
      </button>
      <button>
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

  return (
    <div>
      {!loading && audioPlayerUrl && (
        <AudioPlayer
          clientId={''}
          streamUrl={audioPlayerUrl.streamUrl}
          data={audioPlayerUrl.audioData}
        />
      )}
    </div>
  );
};

export default PodPlayer;
