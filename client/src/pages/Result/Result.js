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
      answers: {},
      answer: {},
      entries: 
      [
        { username: "",
        poolname: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
       }
      ],
      // poolname: "",
      // username: "",
      // answer1: "",
      // answer2: "",
      // answer3: "",
      // answer4: "",
      // answer5: "",
      score: 0,
    };
  
    componentDidMount() {
      this.loadAnswer();
      this.loadPools();
      this.loadAnswers();
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
      // console.log(this.state.pools);
      // console.log(this.state.answer);
      for ( let k = 0; k < this.state.pools.length; k++) {
        if (this.state.pools[k].name === this.state.answer.poolname){
          choice= this.state.pools[k];
        }
      }
      this.setState({pools: choice})
      this.increaseScore();
    }
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    increaseScore = () => {
      let score = 0;
      if (this.state.answer.answer1 === this.state.pools.answer1) {
        score = score + 10;
        // console.log(score);
      }
      if (this.state.answer.answer2 === this.state.pools.answer2) {
        score = score + 10;
        // console.log(score);

      }
      if (this.state.answer.answer3 === this.state.pools.answer3) {
        score = score + 10;
        // console.log(score);

      }
      if (this.state.answer.answer4 === this.state.pools.answer4) {
        score = score + 10;
        // console.log(score);

      }
      if (this.state.answer.answer5 === this.state.pools.answer5) {
        score = score + 10;
        // console.log(score);

      }
      this.setState({score: score})
      // console.log(score)
      // console.log(this.state.pools.name)
      API.updateAnswer(this.props.match.params.id,{

        score: this.state.score
      })
      this.loadAnswers();
    }

    loadAnswers = () => {
      console.log(this.state.answer.poolname)
      API.getAnswers()
        .then(res =>
          this.setState({ answers: res.data, 
          })
        )
        .then(this.next)
        .catch(err => console.log(err));
    };

    next = () => {
      // console.log(this.state.answers)
      let  array = [];
      for ( let i = 0; i < this.state.answers.length; i++) {
        // console.log(this.state.answers[i].poolname)
        // console.log(this.state.answer.poolname)
        if (this.state.answers[i].poolname === this.state.answer.poolname) {
          console.log(this.state.answers[i].username)
          console.log(this.state.answers[i].score)
          array.push(this.state.answers[i]);
        }
      }
      array.sort(this.compare)

      // console.log(array)
      if (array !== undefined && array.length > 0 ) {
        this.setState({entries: array})
        console.log(this.state.entries)
      }

      console.log(`this is the entries obj: ${this.state.entries}`)    
   
    }

    compare = (a,b) => {
      console.log("this worked")
      const scoreA = a.score;
      const scoreB = b.score;
      let comparison = 0;
      if (scoreA > scoreB) {
        comparison = -1;
      } else if (scoreA < scoreB) {
        comparison = 1;
      }
      return comparison
    }

    rankings = () => {
    }



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
          <Col size="md-8">
            <Row>
              <Col size="md-6">
              <h1> Your Answer: {this.state.answer.answer1} </h1>
              </Col>
              <Col size="md-6">
              <h1> Correct Answer: {this.state.pools.answer1} </h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
              <h1> Your Answer: {this.state.answer.answer2} </h1>
              </Col>
              <Col size="md-6">
              <h1> Correct Answer: {this.state.pools.answer2} </h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
              <h1> Your Answer: {this.state.answer.answer3} </h1>
              </Col>
              <Col size="md-6">
              <h1> Correct Answer: {this.state.pools.answer3} </h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
              <h1> Your Answer: {this.state.answer.answer4} </h1>
              </Col>
              <Col size="md-6">
              <h1> Correct Answer: {this.state.pools.answer4} </h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
              <h1> Your Answer: {this.state.answer.answer5} </h1>
              </Col>
              <Col size="md-6">
              <h1> Correct Answer: {this.state.pools.answer5} </h1>
              </Col>
            </Row>
            <Row>
              <div>Your Score: {this.state.score}</div>
            </Row>
          </Col>

          <Col size="md-2">
            <Row>
            <h1>Leaderboard</h1>
            </Row>
            <Row>
              <Col size="md-4">
            <h2>{this.state.entries[0].username}</h2>
              </Col>
              <Col size="md-2"></Col>
              <Col size="md-4">
              <h2>{this.state.entries[0].score}</h2>
              </Col>
            </Row>
            <Row>
              <Col size="md-4">
            {/* <h2>{this.state.entries[1].username}</h2> */}
              </Col>
              <Col size="md-2"></Col>
              <Col size="md-4">
              {/* <h2>{this.state.entries[1].score}</h2> */}
              </Col>
            </Row>
          </ Col>

          <Col size="md-1">
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/"><span className="poolDirect">← Back to Pools</span></Link>
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
