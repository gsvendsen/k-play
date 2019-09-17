import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

import { AudioPlayerStyle } from './AudioPlayerStyle';

const clientId = '45ca7c7c9b41fdcb2501bb7dd27e168b';

const AudioPlayer = withSoundCloudAudio(props => {
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  let { soundCloudAudio, track, duration, currentTime, isReady } = props;

  const [canAutoPlay, setCanAutoPlay] = useState(true);

  useEffect(() => {
    if (isReady && canAutoPlay) {
      soundCloudAudio.play();
      setCanAutoPlay(false);
    }
  }, [isReady, canAutoPlay, soundCloudAudio]);

  return (
    <AudioPlayerStyle isActive={audioPlayerUrl} {...props}>
      <p>{track ? track.title : 'Loading...'}</p>
      <button>
        <img src="./svg/back15s.svg" alt="" />
        15s
      </button>
      <button>
        15s
        <img src="./svg/forward15s.svg" alt="" />
      </button>
      <PlayButton {...props} />
      {/* <audio controls autoPlay>
        {audioPlayerUrl && <source src={audioPlayerUrl}></source>}
      </audio> */}
    </AudioPlayerStyle>
  );
});

const StyledPodPlayer = styled.div``;

const PodPlayer = ({ id }) => {
  const [isReady, setIsReady] = useState(false);
  const [track, setTrack] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTrack(selectTrackById(id, tracks));
    setLoading(false);
  }, []);

  return (
    <StyledPodPlayer>
      {!loading && (
        <AudioPlayer
          onReady={() => {
            setIsReady(!isReady);
          }}
          isReady={isReady}
          clientId={clientId}
          resolveUrl={
            'https://soundcloud.com/user-994747535/111-i-begynnelsen-var-ordet-ett-samtal-mellan-dramatiker-live-2019-05-17'
          }
        />
      )}
    </StyledPodPlayer>
  );
};

export default PodPlayer;

// export default AudioPlayer;
