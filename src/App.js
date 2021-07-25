import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import NavImg from "./Components/NavImg";
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
            <Route exact path="/Home"></Route>
            {/* Profile Page */}
            <Route exact path="/Profile">
              <NavImg />
              <Route />
              {/* Gallery Page */}
              <Route exact path="/Gallery">
                <h1>Gallery page</h1>
              </Route>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
