import { ADD_QUESTION, RECEIVE_QUESTIONS, VOTE_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case ADD_QUESTION :
      const { question } = action
      return {
        ...state,
        [question.id]: question
      }
    case RECEIVE_QUESTIONS: 
      return {
        ...state,
        ...action.questions
      }
    case VOTE_QUESTION:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.vote]: {
            ...state[action.questionId][action.vote],
            votes: state[action.questionId][action.vote].votes.concat([action.author])
          }
        }
      }
    default :
      return state
  }
}