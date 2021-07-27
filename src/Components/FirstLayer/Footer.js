import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
// import { Button } from 'react-bootstrap';
import Button from "../CustomButtons/Button.js";

class Footer extends React.Component {
  render() {
    return(
      <>
      <div id='footer'  style={{ letterSpacing:'1.5px',fontFamily:'fantasy', textAlign :'center' , color:'white' , paddingTop:'55px'}}> <span style={{marginRight:'-60px'}} >Pixels &copy; Comics 2021 </span>
      
      <Button  style={{color:'white', marginLeft:'1000px'}} justIcon link >
                <i className={"fab fa-twitter"}  />
              </Button>
              <Button style={{color:'white', marginLeft:'10px'}} justIcon link >
                <i className={"fab fa-instagram"} />
              </Button>
              <Button style={{color:'white', marginLeft:'10px'}} justIcon link >
                <i className={"fab fa-facebook"} />
              </Button>
       </div>
      {/* // <Navbar   collapseOnSelect expand="small">
      //   <Navbar.Brand  style={{color: 'white'}}> <p style={{ textAlign :'center'}}></p>  </Navbar.Brand>
      // </Navbar>
    ); */}
   
    </>
   )
  }
}
export default Footer;