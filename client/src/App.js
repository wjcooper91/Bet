import React from 'react';

import { Route } from 'react-router-dom';


// pages
import Login from './login/Login';
import home from './home/home';


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