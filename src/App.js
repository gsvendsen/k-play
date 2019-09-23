import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from './helpers/scrollToTop';

import { NotificationMessagesContext } from './contexts/NotificationMessagesContext';
import { AudioPlayerContext } from './contexts/AudioPlayerContext';
import { ThemeContext } from './contexts/ThemeContext';

import GlobalStyle from './styles/GlobalStyle';
import { main, contrast, bright } from './styles/theme';

import playlists from './data/playlists.json';
import youtube from './data/youtube.json';
import tracks from './data/tracks.json';

import StartPage from './pages/StartPage';
import EpisodePage from './pages/EpisodePage';
import BookmarksPage from './pages/BookmarksPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontSizeContext } from './contexts/FontSizeContext';

const data = [playlists, youtube, tracks].flat();

const App = ({ history }) => {
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [audioPlayerUrl, setAudioPlayerUrl] = useState(null);
  const [themeState, setThemeState] = useState(
    localStorage.getItem('lightMode') === 'true'
      ? bright
      : localStorage.getItem('highContrastMode') === 'true'
      ? contrast
      : main
  );
  const [fontSizeState, setFontSizeState] = useState('16');

  useEffect(() => {
    if (!localStorage.getItem('userData')) {
      const defaultLocalStorageObject = {
        watchHistory: [],
        bookmarks: []
      };
      localStorage.setItem(
        'userData',
        JSON.stringify(defaultLocalStorageObject)
      );
    }
  }, []);

  return (
    <Router history={history}>
      {/* Component which Updates window scroll to top on router update */}
      <ScrollToTop />

      {/* Global CSS styling */}
      <GlobalStyle
        isAudioActive={audioPlayerUrl !== null}
        theme={themeState}
        fontSize={fontSizeState}
      />

      {/* Global Theme provided through styled-components */}
      <ThemeProvider theme={themeState}>
        {/* Context object for global Audio Player */}
        <AudioPlayerContext.Provider
          value={{ audioPlayerUrl, setAudioPlayerUrl }}
        >
          {/* Context object for global notification messages */}
          <NotificationMessagesContext.Provider
            value={{ notificationMessage, setNotificationMessage }}
          >
            <ThemeContext.Provider value={{ themeState, setThemeState }}>
              <FontSizeContext.Provider
                value={{ fontSizeState, setFontSizeState }}
              >
                <Layout>
                  <Route
                    render={({ location }) => (
                      <TransitionGroup>
                        <CSSTransition
                          key={location.key}
                          timeout={300}
                          classNames="fade"
                        >
                          <Switch>
                            <Route
                              onUpdate={() => window.scrollTo(0, 0)}
                              exact
                              path="/"
                              component={StartPage}
                            />
                            <Route
                              onUpdate={() => window.scrollTo(0, 0)}
                              path="/avsnitt"
                              component={EpisodePage}
                            />
                            <Route
                              onUpdate={() => window.scrollTo(0, 0)}
                              path="/bookmarks"
                              component={BookmarksPage}
                            />
                            <Route
                              onUpdate={() => window.scrollTo(0, 0)}
                              path="/search"
                              component={SearchPage}
                            />
                            <Route component={NotFoundPage} />
                          </Switch>
                        </CSSTransition>
                      </TransitionGroup>
                    )}
                  />
                </Layout>
              </FontSizeContext.Provider>
            </ThemeContext.Provider>
          </NotificationMessagesContext.Provider>
        </AudioPlayerContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
