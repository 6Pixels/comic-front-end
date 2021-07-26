import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import SearchForm from "../SecondLayer/SearchForm";

export class Comics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
    };
  }

  componentDidMount = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/comic`)
      .then((result) => {
        this.setState({
          comics: result.data,
        });
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  searchItems = (event) => {
    event.preventDefault();
    const string = event.target.item.value;
    axios
      .get(`${process.env.REACT_APP_SERVER}/comic?comicName=${string}`)
      .then((newData) => {
        this.setState({
          comics: newData.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <div>
        <SearchForm string="search for comics" searchItems={this.searchItems} />
        {this.state.comics.map((element, index) => {
          return (
            <div key={index} className="comicCard">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={element.image_url} />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  {/* <Card.Title>{element.release_date}</Card.Title> */}
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

export default withAuth0(Comics);
