import { Button, Card, Form } from "react-bootstrap"
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveAnswer } from '../actions/questionsActions'

class UnansweredQuestion extends Component {
    state = {
        answer: ""
    }
    onChange = (e) => {
        this.setState(
            { answer: e.target.name }
        )
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.saveAnswer(
            {
                answer: this.state.answer,
                qid: this.props.qid,
                authedUser: this.props.authedUser
            }
        )
        alert("answer submitted")
    }
    render() {
        const props = this.props
        return (
            <Card>
                <Card.Header>Asked by {props.author}</Card.Header>
                <Card.Img style={{ height: 180, width: 260 }} variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>Would you rather..</Card.Title>
                    <Form onSubmit={this.onSubmit}>
                        <div className="mb-3" >
                            <Form.Check
                                custom
                                onChange={this.onChange}
                                checked={this.state.answer == "optionOne"}
                                id="optionOne"
                                type={"radio"}
                                label={props.optionOne.text}
                                name="optionOne"
                            />
                            <Form.Check
                                custom
                                onChange={this.onChange}
                                checked={this.state.answer == "optionTwo"}
                                id="optionTwo"
                                type={"radio"}
                                label={props.optionTwo.text}
                                name="optionTwo"
                            />
                        </div>
                        <Button variant="primary" type="submit" disabled={!this.state.answer}>
                            Submit
                          </Button>
                    </Form>

                </Card.Body>
            </Card >
        )
    }
}

export default connect(null, { saveAnswer })(UnansweredQuestion);

