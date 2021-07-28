import React from "react";
import "./App.css";
import Header from "./Components/FirstLayer/Header";
import Footer from "./Components/FirstLayer/Footer";
import Movies from "./Components/FirstLayer/Movies";
import Comics from "./Components/FirstLayer/Comics";
import Characters from "./Components/FirstLayer/Characters";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import Profile from "./Components/FirstLayer/Profile";
import "antd/dist/antd.css";

import Router1 from "./router";

class App extends React.Component {
  render() {
    return (
      <div id="bodyContainer">
        <Router>
          <Header />
          <Switch>
            {/* Home Page */}
            <Route exact path="/">
              <Router1 />
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
          <Footer id="footer" />
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
