import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import CreateAccount from "./CreateAccount";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <NavBar />
        </header>
        <Switch>
          <Route path="/createaccount" render={() => <CreateAccount />} />
          <Route path="/" render={() => <LandingPage />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
