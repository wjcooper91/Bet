import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { logoutUser } from '../../actions/authentication';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class UserHome extends Component {
  state = {
    pools: [],
    answers: []
  };

  componentDidMount() {
    this.loadPools();
    this.loadAnswers();
  }

  loadPools = () => {
    API.getPools()
      .then(res =>
        this.setState({ pools: res.data, 
          name: ""
        })
      )
      .catch(err => console.log(err));
  };

  loadAnswers = () => {
    API.getAnswers()
      .then(res =>
        this.setState({ answers: res.data, 
          poolname: "",
          username: ""
        })
      )
      .then(this.filterAnswers)
      .catch(err => console.log(err));
  };

  filterAnswers = () => {
    const { user } = this.props.auth;
    let list = [];
    // console.log( "User name filtering by", user.userName)
    // console.log("This is the answers obj before the loop", this.state.answers)
    // console.log("This is the length of the answers obj", this.state.answers.length)
    for ( let i = 0; i < this.state.answers.length; i++) {
      // console.log(this.state.answers[i].username)
      if (this.state.answers[i].username === user.userName){
        list.push(this.state.answers[i]);
      }
    }
    this.setState({answers: list})
    // console.log(this.state.answers)
    this.filterPools();
  }

  filterPools = () => {
    let remains = [];
    console.log("This is the pools obj before the if", this.state.pools);
    console.log("This is the answers obj before the if", this.state.answers.length);
    if (this.state.answers.length === 0) {
      console.log( "This should  not work", this.state.pools)
    } else {
      for ( let j = 0; j < this.state.pools.length; j++){
        for (let k = 0; k < this.state.answers.length; k++){
          if (this.state.pools[j].name !== this.state.answers[k].poolname){
            if (remains.length === 0) {
              remains.push(this.state.pools[j])
            }else {
            for (let l = 0; l <remains.length; l++){
              if(this.state.pools[j] !== remains[l])
              remains.push(this.state.pools[j])
            }
          }
          }
        }
      }
      // console.log("this is the length of answers obj before 1st for loop", this.state.answers.length)
      //   for ( let j = 0; j < this.state.pools.length; j++){
      //     console.log("this is the remains array before the " + j + "loop", remains)
      //     for ( let k = 0; k < this.state.answers.length; k++) {
      //       if (this.state.pools[j].name !== this.state.answers[k].poolname){
      //         remains.push(this.state.pools[k]);
      //       }
      //     } 
      //   }
        console.log("This should work", remains)
        this.setState({pools: remains})
        }
    console.log("This is the pools obj after the loop", this.state.pools);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          <Jumbotron>
              <h1>Pools You Have Joined</h1>
            </Jumbotron>
            {this.state.answers.length ? (
              <List>
                {this.state.answers.map(answer => (
                  <ListItem key={answer._id}>
                    <Link to={"/answers/" + answer._id}>
                      <strong>
                        {answer.poolname}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Pools You Can Join</h1>
            </Jumbotron>
            {this.state.pools.length ? (
              <List>
                {this.state.pools.map(pool => (
                  <ListItem key={pool._id}>
                    <Link to={"/pools/" + pool._id}>
                      <strong>
                        {pool.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePool(pool._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

UserHome.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(UserHome));