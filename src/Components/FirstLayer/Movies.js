import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import Back from "../SecondLayer/testP2"
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

  addMovie = async (index) => {

    const movieData = {
      type: 'movie',
      email: this.props.auth0.user.email,
      movieName: this.state.movies[index].title,
      movieImg: this.state.movies[index].image_url,
    }
    try {
      const SERVER = process.env.REACT_APP_SERVER;

      await axios.post(`${SERVER}/post`, movieData)

    } catch (error) {
      console.error(error);
    }

  }

  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <>
      <div id="sss">
      <Back/>
      </div>
      <div className="itemsContainer">
        {this.state.movies.map((element, index) => {
          return (
            <div key={index} className="movieCard">
              <Card className="ItemCards">
                <Card.Img variant="top" src={element.image_url} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Title>{element.release_date}</Card.Title>
                  {isAuthenticated && (
                    <Button variant="danger" onClick={() => this.addMovie(index)}>Add to Fav</Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      </>
    );
  }
}

export default withAuth0(Gallery);
