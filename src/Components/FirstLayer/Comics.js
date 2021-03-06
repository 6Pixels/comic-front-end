import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Alert } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import SearchForm from "../SecondLayer/SearchForm";
import Back from "../SecondLayer/testP3";

export class Comics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      searchKeyword: "",
      showItems: true,
      showError: false,
    };
  }

  componentDidMount = () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  searchItems = async (event) => {
    event.preventDefault();
    const string = event.target.item.value;
    if (string === "") {
      this.componentDidMount();
    } else {
      try {
        const newData = await axios.get(
          `${process.env.REACT_APP_SERVER}/comic?comicName=${string}`
        );
        this.setState({
          comics: newData.data,
          searchKeyword: string,
        });
        if (newData.data.length === 0) {
          this.setState({
            showItems: false,
            showError: true,
          });
        }
      } catch (error) {
        console.log("error");
      }
    }
  };


  addComic = async (index) => {

    const comicData = {
      type: 'comic',
      email: this.props.auth0.user.email,
      comicName: this.state.comics[index].name,
      comicImg: this.state.comics[index].image_url,
    }
    try {
      const SERVER = process.env.REACT_APP_SERVER;

      await axios.post(`${SERVER}/post`, comicData)

    } catch (error) {
      console.error(error);
    }

  }


  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <>

        <Back />

        <SearchForm className='searchForm' string="search for comics" searchItems={this.searchItems} />

        {this.state.showItems && (
          <div>
            <div className="itemsContainer">
              {this.state.comics.map((element, index) => {
                return (
                  <div key={index} className="comicCard">
                    <Card className="ItemCards">
                      <Card.Img variant="top" src={element.image_url} />
                      <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        {/* <Card.Title>{element.release_date}</Card.Title> */}
                        {isAuthenticated && (
                          <Button variant="danger" onClick={() => this.addComic(index)}>Add to Fav</Button>
                        )}
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {this.state.showError && (
          <Alert variant="danger" className="DataErrorAlert">
            There are no results for '{this.state.searchKeyword}' keyword
          </Alert>
        )}
      </>
    );
  }
}

export default withAuth0(Comics);
