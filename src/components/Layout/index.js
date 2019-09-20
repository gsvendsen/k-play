import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutStyle } from './LayoutStyle';
import AudioPlayer from '../AudioPlayer';
import NotificationMessages from '../NotificationMessages';
import HamburgerButton from '../HamburgerButton';
import { withRouter } from 'react-router';
import { AudioPlayerContext } from '../../contexts/AudioPlayerContext';
import Navbar from '../Navbar';

import videos from '../../data/youtube.json';
import tracks from '../../data/tracks.json';

const Layout = props => {
  const megaData = [...tracks, ...videos];

  const videoId = props.location.pathname.split('/')[2] || null;
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <LayoutStyle>
      <header>
        <Link to="/">
          {props.location.pathname !== '/' &&
          props.location.pathname !== '/bookmarks' ? (
            <img src="/svg/down-arrow.svg" alt="Go Back" />
          ) : (
            <img
              style={{
                opacity: menuIsOpen ? '0' : '1',
                transition: 'opacity 0.2s 0.3s ease-in-out'
              }}
              src="/svg/logo.svg"
              alt="K Play Logo"
            />
          )}
        </Link>
        <HamburgerButton
          menuIsOpen={menuIsOpen}
          toggle={() => setMenuIsOpen(!menuIsOpen)}
        />
        <Navbar open={menuIsOpen} />
      </header>

      <section>{props.children}</section>

      {/* Om context variable innehåller stream URL så visa audioplayer */}
      {audioPlayerUrl &&
      props.location.pathname === `/avsnitt/${audioPlayerUrl.audioData.id}` ? (
        <AudioPlayer big />
      ) : (
        <AudioPlayer />
      )}

      {/* Om context variable innehåller data object för pop up messages*/}
      <NotificationMessages />

      <footer>
        <Link to="/">
          {props.history.location.pathname === '/' ? (
            <img src="/svg/home-filled.svg" alt="Home" />
          ) : (
            <img src="/svg/home.svg" alt="Home" />
          )}
          Hem
        </Link>
        <Link to="/bookmarks">
          {props.history.location.pathname === '/search' ? (
            <img src="/svg/search-icon-filled.svg" alt="Search" />
          ) : (
            <img src="/svg/search-icon.svg" alt="Search" />
          )}
          Search
        </Link>
        <Link to="/bookmarks">
          {props.history.location.pathname === '/bookmarks' ? (
            <img src="/svg/bookmark-filled.svg" alt="Bookmark" />
          ) : (
            <img src="/svg/bookmark.svg" alt="Bookmark" />
          )}
          Sparade
        </Link>
      </footer>
    </LayoutStyle>
  );
};

export default withRouter(Layout);
