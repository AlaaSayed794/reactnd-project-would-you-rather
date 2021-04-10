import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { login } from '../actions/loginActions'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class Header extends Component {
    onClick = () => {
        this.props.login(null)
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Would you rather?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/add">New Question</Nav.Link>
                        <Nav.Link as={Link} to="/leaderboard">leaderboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{ marginRight: "30px" }}>
                        <b>Signed in as:</b> {this.props.currentUser.name}
                    </Navbar.Text>
                    <Image src={this.props.currentUser.avatarURL} roundedCircle style={{ width: "auto", height: 70, marginRight: "30px" }} />
                    <Nav.Link as={Button} onClick={this.onClick}>logout</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.loginReducer.currentUser
})
export default connect(mapStateToProps, { login })(Header);
