import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class ApperanceTable extends Component {
  render() {
    const { Char } = this.props;
    return (
      <div className="apperanceTable">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Description</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Race</td>
              <td>{Char.appearance.race}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{Char.appearance.gender}</td>
            </tr>
            <tr>
              <td>Publisher</td>
              <td>{Char.publisher}</td>
            </tr>
            <tr>
              <td>Height</td>
              {Char.appearance.height[1] === "0 cm" ? (
                <td>Unknown</td>
              ) : (
                <td>{Char.appearance.height[1]}</td>
              )}
            </tr>
            <tr>
              <td>Weight</td>
              {Char.appearance.weight[1] === "0 kg" ? (
                <td>Unknown</td>
              ) : (
                <td>{Char.appearance.weight[1]}</td>
              )}
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ApperanceTable;
