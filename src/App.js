import React from 'react';
import Layout from './components/Layout';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import playlists from './data/playlists.json';
import youtube from './data/youtube.json';
import tracks from './data/tracks.json';

const data = [playlists, youtube, tracks].flat();

import StartPage from './pages/StartPage';
import EpisodePage from './pages/EpisodePage';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/avsnitt" component={EpisodePage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
