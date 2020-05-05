export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
const { saveQuestion } = require('../utils/api')

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion({ questionOne, questionTwo }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText: questionOne,
      optionTwoText: questionTwo,
      author: 'tylermcginnis'
    }).then((question) => {
      dispatch(addQuestion(question));
    });
  }
}