import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LeaderBoardCard extends Component {
    render() {
        return (
            <Card >
                <Card.Img style={{ height: 180, width: 260 }} variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        <b>Score : </b> {this.props.answered + this.props.created}
                    </Card.Text>
                    <Card.Text>
                        <b>Answered : </b> {this.props.answered}
                    </Card.Text>
                    <Card.Text>
                        <b>Created : </b> {this.props.created}
                    </Card.Text>
                </Card.Body>
            </Card >
        );
    }
}

export default LeaderBoardCard;
