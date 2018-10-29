import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Nav from "./components/Nav";

import Register from './components/Register/Register';
import Login from './components/Login/Login';

import UserHome from "./pages/UserHome";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Result from "./pages/Result";
import Update from "./pages/Update";

import NoMatch from "./pages/NoMatch";

import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}


class App extends Component {
  render() {
    return(
      <Provider store = { store }>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/pools/:id" component={Detail} />
              <Route exact path="/answers/:id" component={Result} />
              <Route exact path="/userHome" component={UserHome} />
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/update/:id" component={Update} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
};

export default App;
