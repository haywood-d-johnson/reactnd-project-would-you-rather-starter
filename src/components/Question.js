import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Question extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <CardHeader title="Test"></CardHeader>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question,
    users,
  };
}

export default connect(mapStateToProps)(Question);

Question.propTypes = {
  id: PropTypes.string.isRequired,
};
