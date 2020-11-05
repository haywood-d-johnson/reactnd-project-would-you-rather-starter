import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "./Question";
import NavBar from "./NavBar";

import Grid from "@material-ui/core/Grid";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <Grid container>
        <NavBar />
        <Grid container spacing={3} justify="center">
          {this.props.questionIDs.map((id) => (
            <Grid key={id} item xs={4} sm={6}>
              <Question id={id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIDs: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
