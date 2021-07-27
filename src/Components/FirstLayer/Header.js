import React, { Component } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInButton from "../SecondLayer/LogInButton";
import LogoutButton from "../SecondLayer/LogOutButton";

class Header extends Component {
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
                <Link to='/Home' className='navLinks'>Home</Link>
                <Link to='/Movies' className='navLinks'>Movies</Link>
                <Link to='/Comics' className='navLinks'>Comics</Link>
                <Link to='/Characters' className='navLinks'>Characters</Link>
              </Nav>
              <Nav>
                { !isAuthenticated && <LogInButton />}
                { isAuthenticated && <LogoutButton />}
                <Link to='/Profile' className='navLinks'>Profile</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </div>
    );
  }
}

export default withAuth0(Header);
