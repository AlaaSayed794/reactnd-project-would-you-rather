import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { saveQuestion } from '../actions/questionsActions'

class QuestionForm extends Component {
    state = {
        option1: "",
        option2: "",
        redirect: false
    }
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.option2 && this.state.option2) {
            this.props.saveQuestion({ author: this.props.currentUser.id, optionOneText: this.state.option1, optionTwoText: this.state.option2 })
            alert("question successfully listed")
            this.setState({ redirect: true })
        }
        else {
            alert("please fill in the 2 options")
        }
    }
    render() {
        return (
            this.state.redirect ? <Redirect to="/" /> :
                < div >
                    <h1>Would you rather?</h1>
                    <br />
                    <hr />
                    <br />
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="addQuestion">
                            <Form.Label>Option1</Form.Label>
                            <Form.Control name="option1" type="text" placeholder="Enter option 1" onChange={this.onChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Option2</Form.Label>
                            <Form.Control name="option2" type="text" placeholder="Enter option 2" onChange={this.onChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                    </Form>
                </div >
        );
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.loginReducer.currentUser
})
export default connect(mapStateToProps, { saveQuestion })(QuestionForm);