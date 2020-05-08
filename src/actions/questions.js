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
    //TODO: update author

    return saveQuestion({
      optionOneText: questionOne,
      optionTwoText: questionTwo,
      author: 'tylermcginnis'
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
    //const { authedUser } = getState()
    //TODO: update autheduser
    //TODO: error handling

    const authedUser = 'tylermcginnis'
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