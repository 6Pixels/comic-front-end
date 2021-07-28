import React, { Component } from "react";
import axios from "axios";
import { Card, Alert } from "react-bootstrap";
import CharModal from "../SecondLayer/CharModal";
import SearchForm from "../SecondLayer/SearchForm";
import { withAuth0 } from "@auth0/auth0-react";
import BackL from "../SecondLayer/testP"
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
      index: 0,
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
      index: index,
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

  addCharacter = async (index) => {

    const characterData = {
      type: 'character',
      email: this.props.auth0.user.email,
      characterName: this.state.characters[index].name,
      characterImg: this.state.characters[index].imageUrl,
    }
    try {
      const SERVER = process.env.REACT_APP_SERVER;

      await axios.post(`${SERVER}/post`, characterData)

    } catch (error) {
      console.error(error);
    }

  }


  render() {
    return (
      <div>
          <SearchForm
        className='searchForm'
          string="Search for Hero or villain"
          searchItems={this.searchItems}
        />
        {/* <div id="char"> */}
{/* 
        <BackL/> */}
       
      
        <div className="itemsContainer">
          {this.state.showItems &&
            this.state.characters.map((element, index) => {
              return (
                <div key={index} className="charactersCard">
                  <Card
                    className="ItemCards"
                    onClick={() => this.showCharModel(index)}
                  >
                    <Card.Img variant="danger" src={element.imageUrl} />
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
            addCharacter={() => this.addCharacter(this.state.index)}
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

export default withAuth0(Characters);
