import React from 'react';

class Login extends React.Component {
    
    //push
    // goToHome  = () => {
    //     this.props.history.push('/home');
    // };

    //replace
    replaceURL = () => {
        this.props.history.replace('/home');
    };

    render() {
        console.log( 'Props: ', this.props);
        return (
            <div>
                <h1>Bet!</h1>
                
                
                <button onClick={this.replaceURL}>Log In</button>
            </div>
        );
      }
    }

export default Login;