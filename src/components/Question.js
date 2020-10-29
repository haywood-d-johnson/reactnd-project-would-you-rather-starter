import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Question extends Component {
  render() {
    console.log(this.props);
    return <div>Question</div>;
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
