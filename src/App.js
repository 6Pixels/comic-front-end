import React from "react";
import "./App.css";
import NavBar from "./Components/FirstLayer/NavBar";
import Footer from "./Components/FirstLayer/Footer";
import NavImg from "./Components/FirstLayer/NavImg";
import Movies from "./Components/FirstLayer/Movies";
import Comics from "./Components/FirstLayer/Comics";
import Characters from "./Components/FirstLayer/Characters";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            {/* Home Page */}
            <Route exact path="/Home">
              <div id="navbackground"></div>
            </Route>
            {/* Profile Page */}
            <Route exact path="/Profile">
              <NavImg />
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
