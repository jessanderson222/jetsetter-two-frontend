import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import CreateAccount from "./CreateAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/createaccount" render={() => <CreateAccount />} />
          <Route path="/" render={() => <LandingPage />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
