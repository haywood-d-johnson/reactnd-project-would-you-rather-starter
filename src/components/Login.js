import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Card,
  Input,
  InputLabel,
  TextField,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";

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
      <Card
        style={{
          margin: "0 auto",
          display: "flex",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          height: "45%",
          padding: "1rem",
        }}
      >
        <div>
          <Grid container style={{ justifyContent: "center", margin: ".5rem" }}>
            <Grid item>
              <InputLabel htmlFor="input-with-icon-adornment">
                Username
              </InputLabel>
              <Input
                id="username"
                startAdornment={
                  <InputAdornment position="start">
                    <Face />
                  </InputAdornment>
                }
                type="username"
              />
            </Grid>
          </Grid>
          <Grid container style={{ justifyContent: "center", margin: ".5rem" }}>
            <Grid item>
              <InputLabel htmlFor="input-with-icon-adornment">
                Password
              </InputLabel>
              <Input
                id="password"
                startAdornment={
                  <InputAdornment position="start">
                    <Fingerprint />
                  </InputAdornment>
                }
                type="password"
              />
            </Grid>
          </Grid>

          <Grid
            container
            style={{ justifyContent: "space-between", margin: ".5rem" }}
          >
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button variant="text" color="primary">
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid>
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </div>
      </Card>
    );
  }
}

export default connect()(Login);
