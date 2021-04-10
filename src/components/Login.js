import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/loginActions'
import { getUsers } from '../actions/usersActions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends Component {
    state = {
        username: -1
    }
    componentDidMount() {
        this.props.getUsers()
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.users) {
            let idx = this.state.username > -1 ? this.state.username : 0
            this.props.login(this.props.users[idx])
        }
        else (
            alert("no users found")
        )
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Login to continue..</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="exampleForm.ControlSelect1" >
                        <Form.Label>select a user</Form.Label>
                        <Form.Control as="select" name="username" onChange={this.onChange}>
                            {this.props.users.map((user, idx) => (
                                <option key={user.id} value={idx}>{user.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                </Button>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state.usersReducer.users
})
export default connect(mapStateToProps, { login, getUsers })(Login);
