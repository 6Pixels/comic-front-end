import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import CharModal from "../SecondLayer/CharModal";
import SearchForm from "../SecondLayer/SearchForm";
import { withAuth0 } from "@auth0/auth0-react";

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
        // console.log(result.data)
        this.setState({
          characters: result.data,
        });
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };
  showCharModel = async (index) => {
    console.log(this.state.characters[index]);
    await this.setState({
      showModal: true,
      index: index,
      ModalChar: this.state.characters[index],
    });
    // console.log(this.state.ModalChar);
  };
  hideCharModal = () => {
    this.setState({
      showModal: false,
    });
  };

  searchItems = (event) => {
    event.preventDefault();
    console.log("Char");
    const string = event.target.item.value;
    axios
      .get(`${process.env.REACT_APP_SERVER}/characters?characterName=${string}`)
      .then((newData) => {
        // console.log(newData.data);
        this.setState({
          characters: newData.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
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
                  {/* <Card.Text>{element.powerstats.power}</Card.Text> */}
                </Card.Body>
              </Card>
            </div>
          );
        })}
        {this.state.showModal && (
          <CharModal
            showModal={this.state.showModal}
            hideModal={this.hideCharModal}
            index={this.state.index}
            Char={this.state.ModalChar}
            addCharacter={() => this.addCharacter(this.state.index)}
          />
        )}
      </div>
    );
  }
}

export default withAuth0(Characters);
