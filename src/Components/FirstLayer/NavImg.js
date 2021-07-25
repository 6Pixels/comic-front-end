import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Profile from "../SecondLayer/Profile";

class NavImg extends Component {
  render() {
    const isAuthenticated = this.props.auth0.isAuthenticated;
    return (
      <div id="navbackground">
        <Profile />
      </div>
    );
  }
}

export default withAuth0(NavImg);
