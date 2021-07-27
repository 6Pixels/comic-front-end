import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

export class CharModal extends Component {
  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    console.log(" hiiiiii", this.props.Char.appearance.race);
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{this.props.Char.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card onClick={this.showCharModel} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.props.Char.imageUrl} />

              <Card.Body>
                <Card.Title>{this.props.Char.appearance.race}</Card.Title>

                <Card.Title>{this.props.Char.publisher}</Card.Title>
                <Card.Title>{this.props.Char.aliases}</Card.Title>
                {/* <Card.Text> {this.props.Char}</Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Button
              onClick={this.props.hideModal}
              variant="dark"
              size="small"
              block
            >
              C L O S E
            </Button>
            <br />
            {isAuthenticated && <Button variant="dark" onClick={this.props.addCharacter}>Add To Favorite</Button>}
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default withAuth0(CharModal);
