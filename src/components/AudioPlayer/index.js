import React, { useContext } from 'react';

import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';

import { AudioPlayerStyle } from './AudioPlayerStyle';

const AudioPlayer = props => {
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  return (
    <AudioPlayerStyle isActive={audioPlayerUrl} {...props}>
      <audio controls autoPlay>
        {audioPlayerUrl && <source src={audioPlayerUrl}></source>}
      </audio>
    </AudioPlayerStyle>
  );
};

export default AudioPlayer;
