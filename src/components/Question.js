import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";

import { formatQuestion } from "../utils/helpers";

class Question extends Component {
  render() {
    const { question } = this.props;
    const { author, id } = question;

    return (
      <Card>
        <CardHeader title={`${author} asks:`}></CardHeader>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];

  return {
    // question: formatQuestion(question, users[question.author]),
    authedUser,
    question,
    users,
  };
}

export default connect(mapStateToProps)(Question);

Question.propTypes = {
  id: PropTypes.string.isRequired,
};
