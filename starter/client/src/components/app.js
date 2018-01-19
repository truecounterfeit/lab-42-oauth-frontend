import '../style/main.scss';

import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './header'
import Footer from './footer'
import Navbar from './navbar'
import Chat from './chat'
import Login from './login'
import Profile from './profile'

import * as authActions from '../app/actions/auth';
import * as routeActions from '../app/actions/routes';

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        // TODO: this is a good time to validate the user
    }

    render() {
        return (
            <React.Fragment>

                <Header appTitle="Chat App" />

                { /* TODO: Probably should send the routing actions and the route state so you can show/hide links in the menu */ }
                <Navbar /> 

                <main>
                   { /* TODO: Insert Switch logic in here for routing */ }
                </main>

                <Footer>
                    <p>&copy;2017 401n4</p>
                </Footer>

            </React.Fragment>
        )
    }
}

// TODO: Map state, dispatch, and connect the App

export default App;
