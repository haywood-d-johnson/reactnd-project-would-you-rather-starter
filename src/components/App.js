import React, { Component } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        App is running
        <div align="center">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/dighital" title="Dighital">
            Dighital
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}

export default connect()(App);
