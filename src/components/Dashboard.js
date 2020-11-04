import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "./Question";

import Grid from "@material-ui/core/Grid";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <Grid container>
        <h3>Home</h3>
        <Grid container spacing={3} justify="center">
          {this.props.questionIDs.map((id) => (
            <Grid key={id} item xs={12}>
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
