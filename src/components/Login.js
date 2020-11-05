import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Grid, TextField, Button } from "@material-ui/core";

import { setAuthedUser } from "../actions/authedUsers";

import "./App.css";

class Login extends Component {
  state = {
    loading: false,
  };

  handleLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <Grid
        className="login-container"
        container
        item
        xs={12}
        sm={6}
        alignItems="center"
        direction="column"
        justify="space-between"
        style={{ padding: 10 }}
      >
        <div />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 400,
            minWidth: 300,
          }}
        >
          <Grid container justify="center">
            <h2>Would You Rather...?</h2>
          </Grid>
          <TextField label="Username" margin="normal" />
          <TextField label="Password" margin="normal" />
          <Button
            style={{ marginTop: "1rem" }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Log In
          </Button>
        </div>
        <div />
      </Grid>
    );
  }
}

export default connect()(Login);
