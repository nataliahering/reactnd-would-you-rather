import React, { Component, Fragment } from 'react'
import SignIn from './SignIn'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionDetails from './QuestionDetails'
import Home from './Home'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { isEmpty } from 'lodash'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.loading === true ? null :
          <div>
            <Route path='/' exact component={QuestionDetails} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/questions/:question_id' component={QuestionDetails} />
            {this.props.signedIn ? (<Route path='/leaderboard' component={LeaderBoard} />) : (<Route path='/leaderboard' component={SignIn} />)}
          </div>}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    signedIn: authedUser !== null,
    loading: isEmpty(questions) || isEmpty(users)
  }
}

export default connect(mapStateToProps)(App)