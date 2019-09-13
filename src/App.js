import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import SoundPlayer from './components/SoundPlayer/';
// import { ThemeProvider } from 'styled-components';
// import Theme from './styles/Theme';
// import './App.css';

import playlists from './data/playlists.json';
import youtube from './data/youtube.json';
import tracks from './data/tracks.json';

const data = [playlists, youtube, tracks].flat();

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <ThemeProvider theme={Theme} > */}
      <></>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
