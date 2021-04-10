import React, { Component } from 'react';
import Header from './Header'
import { getQuestions } from "../actions/questionsActions"
import { connect } from 'react-redux'
import LoadingOverlay from 'react-loading-overlay';

class mainFrame extends Component {
    state = { loading: true }
    componentDidMount() {
        this.props.getQuestions()
        this.setState({ loading: false })
    }
    render() {
        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Loading...'
            >
                <div>
                    <Header />
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </LoadingOverlay >
        );
    }
}

export default connect(null, { getQuestions })(mainFrame);