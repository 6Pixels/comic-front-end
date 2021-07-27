import React from "react";
import "./App.css";
import NavBar from "./Components/FirstLayer/NavBar";
import Footer from "./Components/FirstLayer/Footer";
import Movies from "./Components/FirstLayer/Movies";
import Comics from "./Components/FirstLayer/Comics";
import Characters from "./Components/FirstLayer/Characters";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import Profile from "./Components/FirstLayer/Profile";
import Home from "./Components/FirstLayer/Home";




class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            {/* Home Page */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* Profile Page */}
            <Route exact path="/Profile">
              {this.props.auth0.isAuthenticated ? <Profile /> : <Redirect to='/login' />}
            </Route>
            {/* Login Page */}
            <Route exact path="/login">
              {this.props.auth0.isAuthenticated ? <Redirect to='/profile' /> : <Login />}
            </Route>
            {/* Gallery Page */}
            <Route exact path="/Movies">
              <Movies />
            </Route>
            <Route exact path="/Comics">
              <Comics />
            </Route>
            <Route exact path="/Characters">
              <Characters />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
