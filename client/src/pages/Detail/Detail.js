import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Ask from "../../components/Ask/Ask"
import Option from "../../components/Option/Option"
import { Input, FormBtn } from "../../components/Form";
import CardBtn from "../../components/CardBtn/CardBtn"


// class Detail extends Component {
//   state = {
//     pool: {}
//   };
//   // When this component mounts, grab the pool with the _id of this.props.match.params.id
//   // e.g. localhost:3000/pools/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getPool(this.props.match.params.id)
//       .then(res => this.setState({ pool: res.data }))
//       .catch(err => console.log(err));
//   }

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.name && this.state.ask1) {
//       API.saveAnswers({

//       })
//         // .then(res => this.loadPools())
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 {this.state.pool.name}
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size ="md-4"></Col>
//           <Col size ="md-4">
//             <Ask
//             name={this.state.pool.ask1}
//             />              
//           </Col>
//           <Col size ="md-4"></Col>
//         </Row>
//         <Row>
//           <Col size ="md-1"></Col>
//           <Col size ="md-4">
//             <Option
//             text={this.state.pool.option1a}
//             />
//           </Col>
//           <Col size ="md-2"></Col>
//           <Col size ="md-4">
//           <Option
//             text={this.state.pool.option1b}
//             />          
//           </Col>
//           <Col size ="md-1"></Col>
//         </Row>

//         <Row>
//           <Col size ="md-4"></Col>
//           <Col size ="md-4">
//             <Ask
//             name={this.state.pool.ask2}
//             />              
//           </Col>
//           <Col size ="md-4"></Col>
//         </Row>
//         <Row>
//           <Col size ="md-1"></Col>
//           <Col size ="md-4">
//             <Option
//             text={this.state.pool.option2a}
//             />
//           </Col>
//           <Col size ="md-2"></Col>
//           <Col size ="md-4">
//           <Option
//             text={this.state.pool.option2b}
//             />          
//           </Col>
//           <Col size ="md-1"></Col>
//         </Row>

//         <Row>
//           <Col size ="md-4"></Col>
//           <Col size ="md-4">
//             <Ask
//             name={this.state.pool.ask3}
//             />              
//           </Col>
//           <Col size ="md-4"></Col>
//         </Row>
//         <Row>
//           <Col size ="md-1"></Col>
//           <Col size ="md-4">
//             <Option
//             text={this.state.pool.option3a}
//             />
//           </Col>
//           <Col size ="md-2"></Col>
//           <Col size ="md-4">
//           <Option
//             text={this.state.pool.option3b}
//             />          
//           </Col>
//           <Col size ="md-1"></Col>
//         </Row>

//         <Row>
//           <Col size ="md-4"></Col>
//           <Col size ="md-4">
//             <Ask
//             name={this.state.pool.ask4}
//             />              
//           </Col>
//           <Col size ="md-4"></Col>
//         </Row>
//         <Row>
//           <Col size ="md-1"></Col>
//           <Col size ="md-4">
//             <Option
//             text={this.state.pool.option4a}
//             />
//           </Col>
//           <Col size ="md-2"></Col>
//           <Col size ="md-4">
//           <Option
//             text={this.state.pool.option4b}
//             />          
//           </Col>
//           <Col size ="md-1"></Col>
//         </Row>

//         <Row>
//           <Col size ="md-4"></Col>
//           <Col size ="md-4">
//             <Ask
//             name={this.state.pool.ask5}
//             />              
//           </Col>
//           <Col size ="md-4"></Col>
//         </Row>
//         <Row>
//           <Col size ="md-1"></Col>
//           <Col size ="md-4">
//             <Option
//             text={this.state.pool.option5a}
//             />
//           </Col>
//           <Col size ="md-2"></Col>
//           <Col size ="md-4">
//           <Option
//             text={this.state.pool.option5b}
//             value={this.state.option5b}
//             onChange={this.handleInputChange}
//             />          
//           </Col>
//           <Col size ="md-1"></Col>
//         </Row>
//         <Row>
//           <Col size="md-4"></Col>
//           <Col size="md-4">
//             <FormBtn
//                     // disabled={!(this.state.author && this.state.title)}
//                     onClick={this.handleFormSubmit}
//                   >
//                     Submit Your Answers
//             </FormBtn>
//             </Col>
//             <Col size="md-4"></Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Pools</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Detail;


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
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  redirect = () => {
    this.props.history.push(`/Pools`)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.answer1) {
      API.saveAnswers({
        poolname: this.state.pool.name,
        username: this.state.name,
        answer1: this.state.answer1,
        answer2: this.state.answer2,  
        answer3: this.state.answer3,
        answer4: this.state.answer4,
        answer5: this.state.answer5,
      })
      this.redirect()
    }
  };

  changeAnswer1a = ()  => {
    console.log('this worked')
    this.setState({ answer1:this.state.pool.option1a })

};

  changeAnswer1b = ()  => {
    console.log('this worked')
    this.setState({ answer1:this.state.pool.option1b })

};

changeAnswer2a = ()  => {
  console.log('this worked')
  this.setState({ answer2:this.state.pool.option2a })

};

changeAnswer2b = ()  => {
  console.log('this worked')
  this.setState({ answer2:this.state.pool.option2b })

};

changeAnswer3a = ()  => {
  console.log('this worked')
  this.setState({ answer3:this.state.pool.option3a })

};

changeAnswer3b = ()  => {
  console.log('this worked')
  this.setState({ answer3:this.state.pool.option3b })

};

changeAnswer4a = ()  => {
  console.log('this worked')
  this.setState({ answer4:this.state.pool.option4a })

};

changeAnswer4b = ()  => {
  console.log('this worked')
  this.setState({ answer4:this.state.pool.option4b })

};

changeAnswer5a = ()  => {
  console.log('this worked')
  this.setState({ answer5:this.state.pool.option5a })

};

changeAnswer5b = ()  => {
  console.log('this worked')
  this.setState({ answer5:this.state.pool.option5b })

};

  render() {
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
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Your name (required)"
            />
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
        </Row>
      </Container>
    );
  }
}

export default Detail;
