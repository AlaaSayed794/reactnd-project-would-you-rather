import React, { Component } from 'react';
import { Card, ProgressBar } from "react-bootstrap"
import { connect } from 'react-redux'

const AnsweredQuestion = (props) => {
    const optionOneVotes = props.optionOne.votes.length
    const optionTwoVotes = props.optionTwo.votes.length
    const optionOnePercentage = Math.round(optionOneVotes * 1000 / (optionOneVotes + optionTwoVotes)) / 10
    const optionTwoPercentage = 100 - optionOnePercentage
    console.log(props.image)
    return (
        <Card>
            <Card.Header>Asked by {props.author}</Card.Header>
            <Card.Img style={{ height: 180, width: 260 }} variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>Would you rather..</Card.Title>
                <Card.Text>
                    {props.optionOne.text} <b><em>  ({optionOneVotes} votes)</em></b>
                </Card.Text>
                <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                <Card.Text>
                    {props.optionTwo.text}<b><em> ({optionTwoVotes} votes)</em></b>
                </Card.Text>
                <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
            </Card.Body>
        </Card >
    );
}

class Question extends Component {
    render() {
        const question = this.props.questions.find(x => x.id === this.props.match.params.id);
        const answered = this.props.currentUser.answers[question.id]
        return (
            answered ? <AnsweredQuestion image={this.props.currentUser.avatarURL} author={this.props.currentUser.name} optionOne={question.optionOne} optionTwo={question.optionTwo} /> : <div>not answered</div>
        );
    }
}


const mapStateToProps = (state) => ({
    questions: state.questionsReducer.questions,
    currentUser: state.loginReducer.currentUser
})
export default connect(mapStateToProps, {})(Question);