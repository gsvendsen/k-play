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
  const { audioPlayerUrl, setAudioPlayerUrl } = useContext(AudioPlayerContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <LayoutStyle menuIsOpen={menuIsOpen}>
      <header>
        <Link to="/">
          {props.location.pathname !== '/' &&
          (props.location.pathname !== '/bookmarks') &
            (props.location.pathname !== '/search') ? (
            <img src="/svg/down-arrow.svg" alt="Go Back" />
          ) : (
            <img
              style={{
                opacity: menuIsOpen ? '0' : '1',
                transition: 'opacity 0.20s 0.1s ease-in-out'
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

        <article onClick={() => setMenuIsOpen(false)} />
        <Navbar menuIsOpen={{ menuIsOpen, setMenuIsOpen }} open={menuIsOpen} />
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

      <footer className="footer">
        <Link to="/">
          {props.history.location.pathname === '/' ? (
            <img src="/svg/home-filled.svg" alt="Home" />
          ) : (
            <img src="/svg/home.svg" alt="Home" />
          )}
          {props.history.location.pathname === '/' ? (
            <p style={{ opacity: '1' }}>Hem</p>
          ) : (
            <p style={{ opacity: '0.7' }}>Hem</p>
          )}
        </Link>
        <Link to="/search">
          {props.history.location.pathname === '/search' ? (
            <img src="/svg/search-icon-filled.svg" alt="Search" />
          ) : (
            <img src="/svg/search-icon.svg" alt="Search" />
          )}
          {props.history.location.pathname === '/search' ? (
            <p style={{ opacity: '1' }}>Search</p>
          ) : (
            <p style={{ opacity: '0.7' }}>Search</p>
          )}
        </Link>
        <Link to="/bookmarks">
          {props.history.location.pathname === '/bookmarks' ? (
            <img src="/svg/bookmark-filled.svg" alt="Bookmark" />
          ) : (
            <img src="/svg/bookmark.svg" alt="Bookmark" />
          )}
          {props.history.location.pathname === '/bookmarks' ? (
            <p style={{ opacity: '1' }}>Sparade</p>
          ) : (
            <p style={{ opacity: '0.7' }}>Sparade</p>
          )}
        </Link>
      </footer>
    </LayoutStyle>
  );
};

export default withRouter(Layout);
