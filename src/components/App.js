import React, { Component } from 'react'
import SignIn from './SignIn'
import LeaderBoard from './LeaderBoard'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Route path='/' exact component={SignIn} />
        <Route path='/leaderboard' component={LeaderBoard} />
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    signedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)