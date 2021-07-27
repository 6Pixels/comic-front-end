import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import PowersChart from "../ThirdLayer/PowersChart";
import ApperanceTable from "../ThirdLayer/ApperanceTable";

export class CharModal extends Component {
  render() {
    const { Char } = this.props;
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <div className="charModal">
        <Modal
          onClick={this.showCharModel}
          show={this.props.showModal}
          onHide={this.props.hideModal}
        >
          <Modal.Header>
            <Modal.Title>{Char.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img
              className="ModalCharImg"
              src={Char.imageUrl}
              alt="charecter"
              // style={{ width: "200px" }}
            />

            <ApperanceTable Char={Char} />
            {/* <p>Race: {Char.appearance.race}</p>
          <p>gender: {Char.appearance.gender}</p>
          {Char.appearance.height[1] === "0 cm" ? (
            <p>Height: Unknown</p>
          ) : (
            <p>Height: {Char.appearance.height[1]}</p>
          )}
          {Char.appearance.weight[1] === "0 kg" ? (
            <p>Weight: Unknown</p>
          ) : (
            <p>Weight: {Char.appearance.weight[1]}</p>
          )}
          <p>Publisher: {Char.publisher}</p> */}

            <div id="allChartsContainer">
              {/* Charts Container */}
              <PowersChart
                power={Char.powerstats.intelligence}
                powerName="Intelligence"
              />
              <br />
              <PowersChart
                power={Char.powerstats.strength}
                powerName="Strength"
              />
              <br />
              <PowersChart power={Char.powerstats.speed} powerName="Speed" />
              <br />
              <PowersChart power={Char.powerstats.power} powerName="Power" />
              <br />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.hideModal} variant="danger" size="small">
              Close
            </Button>
            <br />
            {isAuthenticated && <Button variant="success">Add To Favorite</Button>}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withAuth0(CharModal);
