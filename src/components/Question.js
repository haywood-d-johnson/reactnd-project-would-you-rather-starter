import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";

import "./App.css";

class Question extends Component {
  //TODO: react router for individual question card component
  render() {
    const { question, authorAvatar } = this.props;
    const { author, id } = question;
    console.log(this.props);
    return (
      <Card id={id} className="card-container">
        <CardHeader
          avatar={<Avatar src={authorAvatar} alt={author}></Avatar>}
          title={`${author} asks:`}
        ></CardHeader>
        <CardContent className="card-cardcontent">
          <Typography gutterBottom variant="h5" component="h2">
            Would you rather...?
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            View Poll
          </Button>
        </CardContent>
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
