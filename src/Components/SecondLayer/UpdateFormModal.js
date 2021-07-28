import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export class UpdateFormModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.closing}>
                    <Modal.Header closeButton onClick={this.props.closing}>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.update}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Name" name="name" defaultValue={this.props.profile.name} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={2}>
                                    Img
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="The URL of Img" name="img" defaultValue={this.props.profile.img} />
                                </Col>
                            </Form.Group>

                            <Button variant="outline-primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closing}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateFormModal
