import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Ask from "../../components/Ask/Ask"
import PayPalBtn from "../../components/PayPalBtn/PayPalBtn";
// import Option from "../../components/Option/Option"
import { FormBtn } from "../../components/Form";
// import CardBtn from "../../components/CardBtn/CardBtn";
import { logoutUser } from '../../actions/authentication';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Detail extends Component {
  state = {
    pool: {},
    poolname: "",
    username: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: ""
  };
  // When this component mounts, grab the pool with the _id of this.props.match.params.id
  // e.g. localhost:3000/pools/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPool(this.props.match.params.id)
      .then(res => this.setState({ pool: res.data }))
      .then(this.findUserName)
      .catch(err => console.log(err));
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


  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.username)
    if (this.state.answer1) {
      API.saveAnswers({
        poolname: this.state.pool.name,
        username: this.state.username,
        answer1: this.state.answer1,
        answer2: this.state.answer2,  
        answer3: this.state.answer3,
        answer4: this.state.answer4,
        answer5: this.state.answer5,
        score: 0,
      })
      
      this.redirect()
    }
  };

  findUserName = () => {
    const { user } = this.props.auth;
    console.log(user.userName)
    this.setState({username: user.userName})
  }

  changeAnswer1a = ()  => {
    this.setState({ answer1:this.state.pool.option1a })

};

  changeAnswer1b = ()  => {
    this.setState({ answer1:this.state.pool.option1b })

};

changeAnswer2a = ()  => {
  this.setState({ answer2:this.state.pool.option2a })

};

changeAnswer2b = ()  => {
  this.setState({ answer2:this.state.pool.option2b })

};

changeAnswer3a = ()  => {
  this.setState({ answer3:this.state.pool.option3a })

};

changeAnswer3b = ()  => {
  this.setState({ answer3:this.state.pool.option3b })

};

changeAnswer4a = ()  => {
  this.setState({ answer4:this.state.pool.option4a })

};

changeAnswer4b = ()  => {
  this.setState({ answer4:this.state.pool.option4b })

};

changeAnswer5a = ()  => {
  this.setState({ answer5:this.state.pool.option5a })

};

changeAnswer5b = ()  => {
  this.setState({ answer5:this.state.pool.option5b })

};

  render() {

    const { user } = this.props.auth;


    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.pool.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <form>
            What is your name?: 
            <h1>
                {user.userName}
            </h1>
          </form>
        </Row>
        <Row>
          <Col size ="md-4"></Col>
          <Col size ="md-4">
            <Ask
            name={this.state.pool.ask1}
            />              
          </Col>
          <Col size ="md-4"></Col>
        </Row>
        <Row>
          <Col size ="md-1"></Col>
          <Col size ="md-4">
          <button 
              onClick={this.changeAnswer1a}
              >
            {this.state.pool.option1a}
            </button>   
          </Col>
          <Col size ="md-2"></Col>
          <Col size ="md-4">
            <button 
              onClick={this.changeAnswer1b}
              >
            {this.state.pool.option1b}
            </button>       
          </Col>
          <Col size ="md-1"></Col>
        </Row>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer1} </h1>
          </Col>
          <Col size="md-4"></Col>
        </Row>

        <Row>
          <Col size ="md-4"></Col>
          <Col size ="md-4">
            <Ask
            name={this.state.pool.ask2}
            />              
          </Col>
          <Col size ="md-4"></Col>
        </Row>
        <Row>
          <Col size ="md-1"></Col>
          <Col size ="md-4">
          <button 
              onClick={this.changeAnswer2a}
              >
            {this.state.pool.option2a}
            </button>   
          </Col>
          <Col size ="md-2"></Col>
          <Col size ="md-4">
            <button 
              onClick={this.changeAnswer2b}
              >
            {this.state.pool.option2b}
            </button>       
          </Col>
          <Col size ="md-1"></Col>
        </Row>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer2} </h1>
          </Col>
          <Col size="md-4"></Col>
        </Row>

        <Row>
          <Col size ="md-4"></Col>
          <Col size ="md-4">
            <Ask
            name={this.state.pool.ask3}
            />              
          </Col>
          <Col size ="md-4"></Col>
        </Row>
        <Row>
          <Col size ="md-1"></Col>
          <Col size ="md-4">
          <button 
              onClick={this.changeAnswer3a}
              >
            {this.state.pool.option3a}
            </button>   
          </Col>
          <Col size ="md-2"></Col>
          <Col size ="md-4">
            <button 
              onClick={this.changeAnswer3b}
              >
            {this.state.pool.option3b}
            </button>       
          </Col>
          <Col size ="md-1"></Col>
        </Row>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer3} </h1>
          </Col>
          <Col size="md-4"></Col>
        </Row>

        <Row>
          <Col size ="md-4"></Col>
          <Col size ="md-4">
            <Ask
            name={this.state.pool.ask4}
            />              
          </Col>
          <Col size ="md-4"></Col>
        </Row>
        <Row>
          <Col size ="md-1"></Col>
          <Col size ="md-4">
          <button 
              onClick={this.changeAnswer4a}
              >
            {this.state.pool.option4a}
            </button>   
          </Col>
          <Col size ="md-2"></Col>
          <Col size ="md-4">
            <button 
              onClick={this.changeAnswer4b}
              >
            {this.state.pool.option4b}
            </button>       
          </Col>
          <Col size ="md-1"></Col>
        </Row>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer4} </h1>
          </Col>
          <Col size="md-4"></Col>
        </Row>

        <Row>
          <Col size ="md-4"></Col>
          <Col size ="md-4">
            <Ask
            name={this.state.pool.ask5}
            />              
          </Col>
          <Col size ="md-4"></Col>
        </Row>
        <Row>
          <Col size ="md-1"></Col>
          <Col size ="md-4">
          <button 
              onClick={this.changeAnswer5a}
              >
            {this.state.pool.option5a}
            </button>   
          </Col>
          <Col size ="md-2"></Col>
          <Col size ="md-4">
            <button 
              onClick={this.changeAnswer5b}
              >
            {this.state.pool.option5b}
            </button>       
          </Col>
          <Col size ="md-1"></Col>
        </Row>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
          <h1> Your Answer: {this.state.answer5} </h1>
          </Col>
          <Col size="md-4"></Col>
        </Row>

        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
            <FormBtn
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Your Answers
            </FormBtn>
          </Col>
          <Col size="md-4"></Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Pools</Link>
          </Col>
          <PayPalBtn></PayPalBtn>
          <Col size="md-2">
          </Col>
        </Row>
      </Container>
    );
  }
}
Detail.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Detail));
