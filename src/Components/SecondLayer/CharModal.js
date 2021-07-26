import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'

export class CharModal extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.hideModal}>
          <Modal.Dialog>
            <Modal.Header>
              {/* <h2>{this.props.title}</h2> */}
            </Modal.Header>
            <Modal.Body>
            <Card style={{ width: "18rem" }} onClick={this.showCharModel}>
                    <Card.Img variant="top" src={this.props.Char.imageUrl} />
                    <Card.Body>
                      <Card.Title>{this.props.Char.name}</Card.Title>
                      <Card.Title>{this.props.Char.gender}</Card.Title>
                      <Card.Title>{this.props.Char.race}</Card.Title>
                      <Card.Title>{this.props.Char.publisher}</Card.Title>
                      <Card.Title>{this.props.Char.aliases}</Card.Title> 
                       {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
            <Button onClick = {this.props.hideModal} variant="primary" size="lg" block>C L O S E</Button><br/>
            <Button>Add To Favorite</Button>
          </Modal.Body>
          </Modal.Dialog>
          </Modal>
        )
    }
}

export default CharModal
