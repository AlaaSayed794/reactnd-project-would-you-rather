import React, { Component } from 'react';
import Header from './Header'
import { getQuestions } from "../actions/questionsActions"
import { connect } from 'react-redux'

class mainFrame extends Component {
    componentDidMount() {
        console.log("called")
        this.props.getQuestions()
        this.setState({ loading: false })
    }
    render() {
        return (
            this.props.questions.length && this.props.currentUser ?
                <div>
                    <Header />
                    <div>
                        {this.props.children}
                    </div>
                </div> : <h1>loading , please wait</h1>

        );
    }
}
const mapStateToProps = (state) => ({
    questions: state.questionsReducer.questions,
    currentUser: state.loginReducer.currentUser
})
export default connect(mapStateToProps, { getQuestions })(mainFrame);