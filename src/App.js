import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './components/Login'
import MainFrame from './components/MainFrame'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Question from './components/Question'
import Leaderboard from './components/Leaderboard'
import QuestionForm from './components/QuestionForm'
import NotFound from './components/NotFound'

class App extends Component {
    render() {
        return (
            this.props.currentUser ?
                <MainFrame>
                    <Route exact path='/' component={Home} />
                    <Route path='//add' component={QuestionForm} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/questions/:id' component={Question} />
                </MainFrame> : <Login />
        )
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.loginReducer.currentUser,
    questions: state.questionsReducer.questions
})
export default connect(mapStateToProps, {})(App);

/* <Route path='/questions/:id' component={} />*/