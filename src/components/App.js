import React, { Component, Fragment } from 'react'
import SignIn from './SignIn'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionDetails from './QuestionDetails'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { isEmpty } from 'lodash'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true ? null :
            <div>
              <Route path='/signin' component={SignIn} />
              <PrivateRoute exact path='/add' component={NewQuestion} />
              <PrivateRoute exact path='/questions/:question_id' component={QuestionDetails} />
              <PrivateRoute exact path='/leaderboard' component={LeaderBoard} />
              <PrivateRoute exact path='/home' component={Home} />
              <PrivateRoute path='/' exact component={Home} />
            </div>}
          </div>
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