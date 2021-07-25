import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <Navbar id='footer' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{color: 'black'}}>Pixels &copy; Comics 2021</Navbar.Brand>
      </Navbar>
    );
  }
}
export default Footer;