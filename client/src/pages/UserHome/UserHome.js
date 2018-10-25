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
      let allPools = this.state.pools
      let yourAnswers = this.state.answers  
      console.log(allPools) 
      let remains = [];

      const list = yourAnswers.map(obj => obj.poolname);

      let match = allPools.filter(obj => !list.includes(obj.name))

      if (match.length){
        remains.push(match[0])
      }


      console.log(remains)

    
        this.setState({pools: remains})
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