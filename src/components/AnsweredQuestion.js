import React from 'react';
import { Card, ProgressBar } from "react-bootstrap"
const AnsweredQuestion = (props) => {
    const optionOneVotes = props.optionOne.votes.length
    const optionTwoVotes = props.optionTwo.votes.length
    const optionOnePercentage = Math.round(optionOneVotes * 1000 / (optionOneVotes + optionTwoVotes)) / 10
    const optionTwoPercentage = 100 - optionOnePercentage
    return (
        <Card>
            <Card.Header>Asked by {props.author}</Card.Header>
            <Card.Img style={{ height: 180, width: 260 }} variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>Would you rather..</Card.Title>
                <div>
                    <Card.Text>
                        {props.optionOne.text} <b><em>  ({optionOneVotes} votes)</em></b>
                    </Card.Text>
                    <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                </div>
                <div>
                    <Card.Text>
                        {props.optionTwo.text}<b><em> ({optionTwoVotes} votes)</em></b>
                    </Card.Text>
                    <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                </div>

            </Card.Body>
        </Card >
    );
}

export default AnsweredQuestion;
