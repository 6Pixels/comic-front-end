import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class SearchForm extends Component {
  render() {
    return (
      <div id='ss'>
        <Form onSubmit={this.props.searchItems}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className='searchFormContent' id='searchForm'>
              <Form.Control
                type="text"
                placeholder={this.props.string}
                name="item"
              />
            </div>
            <div className='searchFormContent'>
              <Button variant="dark" type="submit">
                Go
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchForm;
