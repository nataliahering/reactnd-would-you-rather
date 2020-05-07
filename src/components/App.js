import React, { Component } from 'react'
import SignIn from './SignIn'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Home from './Home'
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
        <Route path='/' exact component={Home} />
        <Route path='/add' component={NewQuestion} />
        {this.props.signedIn ? (<Route path='/leaderboard' component={LeaderBoard} />) : (<Route path='/leaderboard' component={SignIn} />)}
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