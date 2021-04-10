import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import NotFound from './NotFound'

class Question extends Component {
    render() {
        if (this.props.questions.find(x => x.id === this.props.match.params.id)) {
            const question = this.props.questions.find(x => x.id === this.props.match.params.id);
            const answered = this.props.currentUser.answers[question.id]
            const questionAuthor = this.props.users.find(x => x.id === question.author)
            return (
                answered ? <AnsweredQuestion image={questionAuthor.avatarURL} author={questionAuthor.name} optionOne={question.optionOne} optionTwo={question.optionTwo} />
                    : <UnansweredQuestion image={questionAuthor.avatarURL} qid={question.id} authedUser={this.props.currentUser.id} author={questionAuthor.name} optionOne={question.optionOne} optionTwo={question.optionTwo} />
            );
        }
        else {
            return (<NotFound />)
        }

    }
}


const mapStateToProps = (state) => ({
    questions: state.questionsReducer.questions,
    currentUser: state.loginReducer.currentUser,
    users: state.usersReducer.users
})
export default connect(mapStateToProps, {})(Question);