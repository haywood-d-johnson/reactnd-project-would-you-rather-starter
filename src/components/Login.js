import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container } from "@material-ui/core";

import { setAuthedUser } from "../actions/authedUsers";

class Login extends Component {
  state = {
    loading: false,
  };

  handleLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    return <Container fixed>Login Component</Container>;
  }
}

export default connect()(Login);
