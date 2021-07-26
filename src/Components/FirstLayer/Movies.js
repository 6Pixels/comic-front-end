import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/movies`)
      .then((result) => {
        this.setState({
          movies: result.data,
        });
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <div>
        {this.state.movies.map((element, index) => {
          return (
            <div key={index} className="movieCard">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={element.image_url} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Title>{element.release_date}</Card.Title>
                  {isAuthenticated && (
                    <Button variant="primary">Add to Fav</Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth0(Gallery);
