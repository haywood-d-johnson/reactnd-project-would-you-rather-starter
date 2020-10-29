export function formatQuestion(question, user) {
  const { id, author, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = user;

  return {
    author,
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL,
  };
}
