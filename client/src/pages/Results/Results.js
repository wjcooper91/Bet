import React from 'react';
import "./results.css";
import { Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";


class Results extends React.Component {


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

    render () {
        return (
            <div>
                <Container fluid>
                    <h1>Results:</h1>
                    <List>
                {this.state.pools.map(pool => (
                  <ListItem key={pool._id}>
                    <Link to={"/pools/" + pool._id}>
                      <strong>
                        {pool.name}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
                    <div className="resultsContainer">
                        <div>
                            

                        </div>
                        <div>


                        </div>
                    </div>

                </Container>
            </div>
        )
    }
}

export default Results;