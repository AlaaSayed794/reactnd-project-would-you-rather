import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class QuestionCard extends Component {
    render() {
        return (
            <Card >
                <Card.Img style={{ height: 180, width: 260 }} variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>Would you rather ?</Card.Title>
                    <Card.Text>
                        {this.props.question.optionOne.text}...
             </Card.Text>
                    <Button variant="primary" as={Link} to={"/questions/" + this.props.question.id}>View poll</Button>
                </Card.Body>
            </Card >
        );
    }
}

export default QuestionCard;
