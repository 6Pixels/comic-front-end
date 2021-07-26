import React, { Component } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap'

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
    return (
      <div>
        {this.state.movies.map((element, index) => {
          return (
            <div key={index} className='movieCard'>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={element.image_url} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Title>{element.release_date}</Card.Title>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
