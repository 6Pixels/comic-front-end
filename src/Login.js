import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './Components/SecondLayer/LogInButton';

class Login extends React.Component {
  render() {
    return (
      <div className='log'>

      <Card id="cardLog" style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title id='cardT' >Log In</Card.Title>
          <Card.Text id="cardT2">
            Click Below to Log In
          </Card.Text>
          <LoginButton />
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Login;
