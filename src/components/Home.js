import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import QuestionCard from './QuestionCard'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (

            <Tabs defaultActiveKey="answered" id="uncontrolled-tab-example">
                <Tab eventKey="answered" title="answered questions">
                    <ListGroup >
                        {this.props.questions.filter(question => this.props.currentUser.answers[question.id]).map(question => (
                            <ListGroup.Item key={question.id} >
                                <QuestionCard question={question} image={this.props.users.find(x => x.id === question.author).avatarURL} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Tab>
                <Tab eventKey="unanswered" title="unanswered questions">
                    <ListGroup >



                        {this.props.questions.filter(question => !this.props.currentUser.answers[question.id]).map(question => (
                            <ListGroup.Item key={question.id} >
                                <QuestionCard question={question} image={this.props.users.find(x => x.id === question.author).avatarURL} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Tab>

            </Tabs>


        );
    }
}
const mapStateToProps = (state) => ({
    questions: state.questionsReducer.questions,
    users: state.usersReducer.users,
    currentUser: state.loginReducer.currentUser
})
export default connect(mapStateToProps, {})(Home);
