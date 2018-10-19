import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

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
          poolname: ""
        })
      )
      .catch(err => console.log(err));
  };


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
                    <Link to={"/answer/" + answer._id}>
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

export default UserHome;
