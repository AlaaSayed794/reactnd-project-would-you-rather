import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getUsers } from "../actions/usersActions"
import Login from './Login'

class Layout extends Component {
    render() {
        return (
            this.props.currentUser ?
                <div>
                    <Header />
                    <div>
                        {this.props.children}
                    </div>
                </div> : <Login />
        )
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.loginReducer.currentUser
})
export default connect(mapStateToProps, { getUsers })(Layout);