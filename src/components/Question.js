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

class Question extends Component {
  render() {
    const { question } = this.props;
    const { author, id } = question;
    console.log(this.props);
    return (
      <Card>
        <CardHeader title={`${author} asks:`}>
          {/* <Avatar
            alt={question.author}
            src={this.props.users[question.author].avatarURL}
          /> */}
        </CardHeader>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
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
