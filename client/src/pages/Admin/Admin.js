import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Pools extends Component {
  state = {
    pools: [],
    name: "",
    ask1: "",
    option1a: "",
    option1b: "",
    answer1: "",
    ask2: "",
    option2a: "",
    option2b: "",
    answer2: "",    
    ask3: "",
    option3a: "",
    option3b: "",
    answer3: "",
    ask4: "",
    option4a: "",
    option4b: "",
    answer4: "",
    ask5: "",
    option5a: "",
    option5b: "",
    answer5: ""
  };

  componentDidMount() {
    this.loadPools();
  }

  loadPools = () => {
    API.getPools()
      .then(res =>
        this.setState({ pools: res.data, 
          name: "",
          ask1: "",
          option1a: "",
          option1b: "",
          answer1: "",
          ask2: "",
          option2a: "",
          option2b: "",
          answer2: "",    
          ask3: "",
          option3a: "",
          option3b: "",
          answer3: "",
          ask4: "",
          option4a: "",
          option4b: "",
          answer4: "",
          ask5: "",
          option5a: "",
          option5b: "",
          answer5: ""
        })
      )
      .catch(err => console.log(err));
  };

  deletePool = id => {
    API.deletePool(id)
      .then(res => this.loadPools())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.ask1) {
      API.savePool({
        name: this.state.name,
        ask1: this.state.ask1,
        option1a: this.state.option1a,
        option1b: this.state.option1b,
        answer1: this.state.answer1,
        ask2: this.state.ask2,
        option2a: this.state.option2a,
        option2b: this.state.option2b,
        answer2: this.state.answer2,  
        ask3: this.state.ask3,
        option3a: this.state.option3a,
        option3b: this.state.option3b,
        answer3: this.state.answer3,
        ask4: this.state.ask1,
        option4a: this.state.option4a,
        option4b: this.state.option4b,
        answer4: this.state.answer4,
        ask5: this.state.ask1,
        option5a: this.state.option5a,
        option5b: this.state.option5b,
        answer5: this.state.answer5,
      })
        .then(res => this.loadPools())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create a Pool</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name of Pool (required)"
              />
              <Input
                value={this.state.ask1}
                onChange={this.handleInputChange}
                name="ask1"
                placeholder="What is your first question (required)"
              />
              <Input
                value={this.state.option1a}
                onChange={this.handleInputChange}
                name="option1a"
                placeholder="What is the first option (required)"
              />
              <Input
                value={this.state.option1b}
                onChange={this.handleInputChange}
                name="option1b"
                placeholder="What is the second option (required)"
              />
              <Input
                value={this.state.answer1}
                onChange={this.handleInputChange}
                name="anwer1"
                placeholder="What is the answer (required)"
              />
              <Input
                value={this.state.ask2}
                onChange={this.handleInputChange}
                name="ask2"
                placeholder="What is your second question (required)"
              />
              <Input
                value={this.state.option2a}
                onChange={this.handleInputChange}
                name="option2a"
                placeholder="What is the first option (required)"
              />
              <Input
                value={this.state.option2b}
                onChange={this.handleInputChange}
                name="option2b"
                placeholder="What is the second option (required)"
              />
              <Input
                value={this.state.answer2}
                onChange={this.handleInputChange}
                name="anwer2"
                placeholder="What is the answer (required)"
              />
              <Input
                value={this.state.ask3}
                onChange={this.handleInputChange}
                name="ask3"
                placeholder="What is your third question (required)"
              />
              <Input
                value={this.state.option3a}
                onChange={this.handleInputChange}
                name="option3a"
                placeholder="What is the first option (required)"
              />
              <Input
                value={this.state.option3b}
                onChange={this.handleInputChange}
                name="option3b"
                placeholder="What is the second option (required)"
              />
              <Input
                value={this.state.answer3}
                onChange={this.handleInputChange}
                name="anwer3"
                placeholder="What is the answer (required)"
              />
              <Input
                value={this.state.ask4}
                onChange={this.handleInputChange}
                name="ask4"
                placeholder="What is your fourth question (required)"
              />
              <Input
                value={this.state.option4a}
                onChange={this.handleInputChange}
                name="option4a"
                placeholder="What is the first option (required)"
              />
              <Input
                value={this.state.option4b}
                onChange={this.handleInputChange}
                name="option4b"
                placeholder="What is the second option (required)"
              />
              <Input
                value={this.state.answer4}
                onChange={this.handleInputChange}
                name="anwer4"
                placeholder="What is the answer (required)"
              />
              <Input
                value={this.state.ask5}
                onChange={this.handleInputChange}
                name="ask5"
                placeholder="What is your fifth question (required)"
              />
              <Input
                value={this.state.option5a}
                onChange={this.handleInputChange}
                name="option5a"
                placeholder="What is the first option (required)"
              />
              <Input
                value={this.state.option5b}
                onChange={this.handleInputChange}
                name="option5b"
                placeholder="What is the second option (required)"
              />
              <Input
                value={this.state.answer5}
                onChange={this.handleInputChange}
                name="anwer5"
                placeholder="What is the answer (required)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Pool
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Update a Pool</h1>
            </Jumbotron>
            {this.state.pools.length ? (
              <List>
                {this.state.pools.map(pool => (
                  <ListItem key={pool._id}>
                    <Link to={"/update/" + pool._id}>
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

export default Pools;
