import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import Ask from "../../components/Ask/Ask"
// import Option from "../../components/Option/Option"
// import { Input, FormBtn } from "../../components/Form";
// import CardBtn from "../../components/CardBtn/CardBtn";
import { logoutUser } from '../../actions/authentication';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Result extends Component {
    state = {
      pools: {},
      answer: {},
      poolname: "",
      username: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: ""
    };
  
    componentDidMount() {
      this.loadAnswer();
      this.loadPools();
    }
  
    loadAnswer = () => {
      API.getAnswer(this.props.match.params.id)
      .then(res => this.setState({ answer: res.data,
        poolname: ""
      }))    
      .catch(err => console.log(err));
    };

    loadPools = () => {
      API.getPools()
        .then(res =>
          this.setState({ pools: res.data, 
            name: ""
          })
        )
        .then(this.filterPools)
        .catch(err => console.log(err));
    };

  
    filterPools = () => {
      let choice = {};
      console.log(this.state.pools);
      console.log(this.state.answer);
      for ( let k = 0; k < this.state.pools.length; k++) {
        if (this.state.pools[k].name === this.state.answer.poolname){
          choice= this.state.pools[k];
        }
      }
      this.setState({pools: choice})
    }
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

  redirect = () => {
    this.props.history.push(`/userHome`)
  }

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Your Answers for {this.state.answer.poolname}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer.answer1} </h1>
          </Col>
          <Col size="md-4">
          <h1> Correct Answer: {this.state.pools.answer1} </h1>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer.answer2} </h1>
          </Col>
          <Col size="md-4">
          <h1> Correct Answer: {this.state.pools.answer2} </h1>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer.answer3} </h1>
          </Col>
          <Col size="md-4">
          <h1> Correct Answer: {this.state.pools.answer3} </h1>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer.answer4} </h1>
          </Col>
          <Col size="md-4">
          <h1> Correct Answer: {this.state.pools.answer4} </h1>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer.answer5} </h1>
          </Col>
          <Col size="md-4">
          <h1> Correct Answer: {this.state.pools.answer5} </h1>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Pools</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
Result.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Result));
