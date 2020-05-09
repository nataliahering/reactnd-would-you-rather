import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function getUsers () {
  return _getUsers().then((users) => users)
}

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion ({ optionOneText, optionTwoText, author }) {
  return _saveQuestion({ optionOneText, optionTwoText, author })
}

export function saveQuestionAnswer ({ authedUser, questionId, vote }) {
  return _saveQuestionAnswer({ authedUser, qid: questionId, answer: vote })
}