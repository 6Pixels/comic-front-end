import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import CharModal from "../SecondLayer/CharModal";
import SearchForm from "../SecondLayer/SearchForm";

export class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      showModal: false,
      index: 0,
      ModalChar: [],
    };
  }

  componentDidMount = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/characters`)
      .then((result) => {
        this.setState({
          characters: result.data,
        });
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };
  showCharModel = (index) => {
    this.setState({
      showModal: true,
      index: index,
      ModalChar: this.state.characters[index],
    });
  };
  hideCharModal = () => {
    this.setState({
      showModal: false,
    });
  };

  searchItems = (event) => {
    event.preventDefault();
    console.log("Char");
    const string = event.target.comic.value;
    axios
      .get(`${process.env.REACT_APP_SERVER}/characters?characterName=${string}`)
      .then((newData) => {
        console.log(newData.data);
        this.setState({
            characters: newData.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div>
        <SearchForm
          string="Search for Hero or villein"
          searchItems={this.searchItems}
        />
        {this.state.characters.map((element, index) => {
          return (
            <div key={index} className="charactersCard">
              <Card
                style={{ width: "18rem" }}
                onClick={() => this.showCharModel(index)}
              >
                <Card.Img variant="top" src={element.imageUrl} />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        <CharModal
          showModal={this.state.showModal}
          hideModal={this.hideCharModal}
          index={this.state.index}
          Char={this.state.ModalChar}
        />
      </div>
    );
  }
}

export default Characters;
