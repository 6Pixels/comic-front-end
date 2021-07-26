import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class SearchForm extends Component {
  render() {
    return (
      <div id="searchForm">
        <Form onSubmit={this.props.searchItems}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder={this.props.string} name='item'/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Go
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchForm;
