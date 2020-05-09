export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_QUESTION = 'VOTE_QUESTION'
const { saveQuestion, saveQuestionAnswer } = require('../utils/api')

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
      author: authedUser
    }).then((question) => {
      dispatch(addQuestion(question));
    });
  }
}

function voteQuestion({ questionId, vote, author }) {
  return {
    type: VOTE_QUESTION,
    questionId,
    vote,
    author
  }
}

export function handleVoteQuestion({ questionId, vote }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestionAnswer({
      questionId,
      vote,
      authedUser
    }).then(() => {
      dispatch(voteQuestion({
        questionId, vote, author: authedUser
      }));
    });
  }
}