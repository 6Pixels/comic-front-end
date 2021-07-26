import React, { Component } from 'react'
import axios from "axios";
import { Card } from 'react-bootstrap'
import CharModal from '../SecondLayer/CharModal';

export class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            showModal: false,
            index: 0,
            ModalChar :[]
        };
    }

    componentDidMount = async () => {
        console.log('chararaters')
        axios
            .get(`${process.env.REACT_APP_SERVER}/characters`)
            .then((result) => {
                console.log(result)
                this.setState({
                    characters: result.data,
                });
            })
            .catch((error) => {
                console.log("Error : ", error);
            });
    };
    showCharModel = (index) => {
        // key.preventDefault()
        this.setState({
            showModal: true,
            index: index,
            ModalChar : this.state.characters[index]
        })

    }
    hideCharModal = () => {
        this.setState(
            {
                showModal: false
            }
        )
    }
    // console.log(this.state.characters);
    render() {
        return (
            <div>
                {this.state.characters.map((element, index) => {
                    return (
                        <div key={index} className='charactersCard'>
                            <Card style={{ width: "18rem" }} onClick={()=>this.showCharModel(index)}>
                                <Card.Img variant="top" src={element.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>
                                </Card.Body>
                            </Card>

                        </div>
                    );
                })}
                <CharModal showModal={this.state.showModal} hideModal={this.hideCharModal} index ={this.state.index} Char={this.state.ModalChar}/>
            </div>
        );
    }
}

export default Characters
