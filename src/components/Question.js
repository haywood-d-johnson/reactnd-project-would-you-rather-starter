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
    const { question, authorAvatar } = this.props;
    const { author, id } = question;
    console.log(this.props);
    return (
      <Card id={id}>
        <CardHeader
          avatar={<Avatar src={authorAvatar} alt={author}></Avatar>}
          title={`${author} asks:`}
        ></CardHeader>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const authorAvatar = users[question.author].avatarURL;

  return {
    authedUser,
    question,
    users,
    authorAvatar,
  };
}

export default connect(mapStateToProps)(Question);

Question.propTypes = {
  id: PropTypes.string.isRequired,
};
