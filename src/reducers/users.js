import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, VOTE_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION:
      const { question } = action
      if (!question.author) {
        return state
      }
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions:
            state[question.author].questions ?
            state[question.author].questions.concat([question.id]) :
            [question.id]
        }
      }
    case VOTE_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          answers: {
            ...state[action.author].answers,
            [action.questionId]: action.vote
          }
        }
      }
    default :
      return state
  }
}