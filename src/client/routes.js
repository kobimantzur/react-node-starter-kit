import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import {
  Route, Redirect, Switch,BrowserRouter
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import Results from './containers/Results';
const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results"  component={Results} />
        {/* <Redirect to="/404" /> */}
      </Switch>
      
    </Layout>
     </ConnectedRouter>
);

export default Routes;