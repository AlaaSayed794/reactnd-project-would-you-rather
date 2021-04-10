import Layout from './components/Layout'
import { Route } from 'react-router-dom'
import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <h1>Hello</h1>
                </Layout>
            </div>
        )
    }
}

export default App;

/*
<Route exact path='/' component={Main} />
                <Route path='/lists/:id' component={EditList} />
*/