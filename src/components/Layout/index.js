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
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <LayoutStyle menuIsOpen={menuIsOpen}>
      <header>
        <Link to="/">
          {props.location.pathname !== '/' &&
          props.location.pathname !== '/bookmarks' &&
          props.location.pathname !== '/search' ? (
            <img
              style={{
                opacity: menuIsOpen ? '0' : '1',
                transition: 'opacity 0.20s 0.1s ease-in-out'
              }}
              src="/svg/down-arrow.svg"
              alt="Go Back"
            />
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
        <Navbar
          selectedPage={{ selectedPage, setSelectedPage }}
          menuIsOpen={{ menuIsOpen, setMenuIsOpen }}
          open={menuIsOpen}
        />
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

      <main>
        <button onClick={() => setSelectedPage('options')}>
          <img src="/svg/accessability.svg" alt="" />
          Tillgänglighet
        </button>
        <div>
          <div>
            <p>kulturakademin.se</p>
            <p>+46 (0) 72 326 42 44</p>
          </div>
          <div>
            <p>Fysiska kurser ></p>
            <p>info@kulturakademin.se</p>
          </div>
          <hr />
          <div>
            <article>
              <p>Kulturakademin</p>
            </article>
            <article>
              <p>© Kulturakademin</p>
              <p>All rights reserved</p>
            </article>
          </div>
        </div>
      </main>

      <footer className="footer">
        <Link to="/">
          {props.history.location.pathname === '/' ? (
            <img
              src="/svg/home-filled.svg"
              alt="Home"
              style={{ opacity: '1' }}
            />
          ) : (
            <img src="/svg/home.svg" alt="Home" style={{ opacity: '0.6' }} />
          )}
          {props.history.location.pathname === '/' ? (
            <p style={{ opacity: '1' }}>Hem</p>
          ) : (
            <p style={{ opacity: '0.6' }}>Hem</p>
          )}
        </Link>
        <Link to="/search">
          {props.history.location.pathname === '/search' ? (
            <img
              src="/svg/search-icon-filled.svg"
              alt="Search"
              style={{ opacity: '1' }}
            />
          ) : (
            <img
              src="/svg/search-icon.svg"
              alt="Search"
              style={{ opacity: '0.6' }}
            />
          )}
          {props.history.location.pathname === '/search' ? (
            <p style={{ opacity: '1' }}>Search</p>
          ) : (
            <p style={{ opacity: '0.6' }}>Search</p>
          )}
        </Link>
        <Link to="/bookmarks">
          {props.history.location.pathname === '/bookmarks' ? (
            <img
              src="/svg/bookmark-filled.svg"
              alt="Bookmark"
              style={{ opacity: '1' }}
            />
          ) : (
            <img
              src="/svg/bookmark.svg"
              alt="Bookmark"
              style={{ opacity: '0.6' }}
            />
          )}
          {props.history.location.pathname === '/bookmarks' ? (
            <p style={{ opacity: '1' }}>Sparade</p>
          ) : (
            <p style={{ opacity: '0.6' }}>Sparade</p>
          )}
        </Link>
      </footer>
    </LayoutStyle>
  );
};

export default withRouter(Layout);
