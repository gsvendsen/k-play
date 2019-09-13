import React from 'react';
import Layout from './components/Layout'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'

import StartPage from './pages/StartPage'
import EpisodePage from './pages/EpisodePage'

const App = ({history}) => {
  return (
    <Router history={history}>
    <Layout>

        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/avsnitt" component={EpisodePage} />
        </Switch>

    </Layout>
    </Router>
  );
}

export default App;
