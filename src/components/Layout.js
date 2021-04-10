import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import MainFrame from './MainFrame'
import { Route } from 'react-router-dom'
import Home from './Home'
import Question from './Question'
import QuestionForm from './QuestionForm'

class Layout extends Component {
    render() {
        return (
            this.props.currentUser ?
                <MainFrame>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/new-question' component={QuestionForm} />
                    <Route path='/questions/:id' component={Question} />
                </MainFrame> : <Login />
        )
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.loginReducer.currentUser,
    questions: state.questionsReducer.questions
})
export default connect(mapStateToProps, {})(Layout);

/* <Route path='/questions/:id' component={} />*/