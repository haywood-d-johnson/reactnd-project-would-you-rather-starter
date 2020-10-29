import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({
      users,
      questions,
    }))
    .catch((err) => console.error("There was a problem: ", err));
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(id, authUser, answer) {
  return _saveQuestionAnswer({ id, authUser, answer });
}
