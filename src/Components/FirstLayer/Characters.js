import React, { Component } from "react";
import axios from "axios";
import { Card, Alert } from "react-bootstrap";
import CharModal from "../SecondLayer/CharModal";
import SearchForm from "../SecondLayer/SearchForm";

export class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      showModal: false,
      ModalChar: [],
      searchKeyword: "",
      showItems: true,
      showError: false,
    };
  }

  componentDidMount = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_SERVER}/characters`)
        .then((result) => {
          // console.log(result.data)
          this.setState({
            characters: result.data,
          });
        })
        .catch((error) => {
          console.log("Error : ", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  showCharModel = async (index) => {
    console.log(this.state.characters[index]);
    await this.setState({
      showModal: true,
      ModalChar: this.state.characters[index],
    });
  };
  hideCharModal = () => {
    this.setState({
      showModal: false,
    });
  };

  searchItems = async (event) => {
    event.preventDefault();
    const string = event.target.item.value;
    if (string === "") {
      this.componentDidMount();
    } else {
      try {
        const newData = await axios.get(
          `${process.env.REACT_APP_SERVER}/characters?characterName=${string}`
        );
        this.setState({
          characters: newData.data,
          searchKeyword: string,
        });
      } catch (error) {
        if (error) {
          console.log();
          this.setState({
            showItems: false,
            showError: true,
          });
        }
      }
    }
  };
  render() {
    return (
      <div>
        <SearchForm
          string="Search for Hero or villein"
          searchItems={this.searchItems}
        />
        <div className="itemsContainer">
          {this.state.showItems &&
            this.state.characters.map((element, index) => {
              return (
                <div key={index} className="charactersCard">
                  <Card
                    className="ItemCards"
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
        </div>
        {this.state.showModal && (
          <CharModal
            showModal={this.state.showModal}
            hideModal={this.hideCharModal}
            Char={this.state.ModalChar}
          />
        )}
        {this.state.showError && (
          <Alert variant="danger" className="DataErrorAlert">
            There are no results for '{this.state.searchKeyword}' keyword
          </Alert>
        )}
      </div>
    );
  }
}

export default Characters;
