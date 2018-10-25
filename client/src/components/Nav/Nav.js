import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentication';
import { withRouter } from 'react-router-dom';
import pp_logo from '../../media/pp_logo.png';
import './nav.css';

class Nav extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

  render () {

    const {isAuthenticated, user} = this.props.auth;
    const authLinks = (
        <ul className="navbar-nav ml-auto">
            <a href="/userHome" className="nav-link" >
                {user.userName}
            </a>
            <a  className="nav-link" onClick={this.onLogout.bind(this)}>
                Logout
            </a>
        </ul>
    )
    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Sign In</Link>
            </li>
        </ul>
    )
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/"><img className="headerImg" src={pp_logo} alt="Pool Party"/></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
        </nav>
    )
  }
}
Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Nav));