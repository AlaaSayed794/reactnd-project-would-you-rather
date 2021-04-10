import ListGroup from 'react-bootstrap/ListGroup'
import LeaderBoardCard from './LeaderboardCard'
import { connect } from 'react-redux'
import React, { Component } from 'react';

class Leaderboard extends Component {
    render() {
        console.log(this.props.questions)
        return (
            <ListGroup >
                {[...this.props.users].sort(function (b, a) { return Object.keys(a.answers).length + a.questions.length - Object.keys(b.answers).length - b.questions.length; }).map(user => (
                    <ListGroup.Item key={user.id} >
                        <LeaderBoardCard name={user.name} image={user.avatarURL} answered={Object.keys(user.answers).length} created={user.questions.length} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    questions: state.questionsReducer.questions
})
export default connect(mapStateToProps, {})(Leaderboard);