import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCountries } from "../thunk/countryThunk";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getCountries();
  }

  render() {
    return (
      <div className="LandingPage">
        <h1>Hello</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCountries: () => dispatch(getCountries())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LandingPage)
);
