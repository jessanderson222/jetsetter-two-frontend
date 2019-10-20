import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default withRouter(LandingPage);
