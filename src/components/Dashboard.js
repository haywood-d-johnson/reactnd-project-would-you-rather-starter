import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "./Question";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 align="center">Home</h3>
        <ul align="center">
          {this.props.questionIDs.map((id) => (
            <li key={id}>
              <div>
                <Question id={id} />
              </div>
            </li>
          ))}
        </ul>
      </div>
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
