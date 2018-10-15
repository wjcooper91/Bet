import React from 'react';

import { Route } from 'react-router-dom';


// pages
import Login from './components/Login';
import home from './components/home';


class App extends React.Component {

  render () {

    //JSX
    return (
    <div>

      <Route exact path = '/' component = {Login}/>
      <Route path = '/home' component = {home}/>
    </div>
    );
  }
}

export default App;