import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInButton from "../SecondLayer/LogInButton";
import LogoutButton from "../SecondLayer/LogOutButton";
import { withAuth0 } from "@auth0/auth0-react";

class NavBar extends Component {
  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <div id="laith">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Comics Pixels</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to='/'>Home</Link>
                {/* <Nav.Link href="/Home">Home</Nav.Link> */}
                <Link to='/Movies'>Movies</Link>
                <Link to='/Comics'>Comics</Link>
                <Link to='/Characters'>Characters</Link>
                {/* <Nav.Link href="/Gallery">Gallery</Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Comics</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Movies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">News</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                {!isAuthenticated && <LogInButton />}
                {isAuthenticated && <LogoutButton />}
                <Link to='/Profile'>Profile</Link>
                {/* <Nav.Link eventKey={2} href="/Profile">
                  Profile
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    );
  }
}

export default withAuth0(NavBar);
