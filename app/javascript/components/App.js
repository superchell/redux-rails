import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Router, Route, Link } from "react-router-dom";

import rootReducer from './redux/reducers';
import { createStore, applyMiddleware } from 'redux'

import createBrowserHistory from 'history/createBrowserHistory'

import App from './redux/App'
import AppNext from './redux/AppNext'

export default (props) => {
    const initialState = props;
    const store = createStore(rootReducer, initialState)
    const customHistory = createBrowserHistory()

    return(
        <Provider store={store}>
            <Router  history={customHistory}>
                <Route exact path="/" component={App} />
            </Router>
        </Provider>
    )
}