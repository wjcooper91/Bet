import React from 'react';
// import { Navbar } from "/Users/williamcooper/workspace/bet/client/src/components/Navbar/Navbar.js";
import './home.css';


class home extends React.Component {

  frontDoor = () => {
    this.props.history.push('/');
};
  render () {

    //JSX
    return (
    <div className="container">
      <div class="Navbar">
        <h2>Bet!</h2>
        <h1>Pick em</h1>
        <h2>[UserName]</h2>
      </div>
    </div>
    );
  }
}

export default home;