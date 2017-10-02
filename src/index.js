import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import Leaderboards from './components/auth/leaderboards';
import profile_createProf from './components/profile/create_profile.js';
import Game from './components/auth/game';
import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Homepage from './components/auth/homepage';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import RequireAuth from './components/auth/require_auth'
import {AUTH_USER} from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="homepage" component={Homepage} />
          <Route path="signin" component={Signin} />
          <Route path="signout" component={Signout} />
          <Route path="signup" component={Signup} />
          <Route path="game" component={RequireAuth(Game)} />
          <Route path="profile" component={RequireAuth(profile_createProf)} />
          <Route path="leaderboards" component={RequireAuth(Leaderboards)} />
        </Route>
      </Router>
    </Provider>
    , document.querySelector('.container'));