import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux'

import App from './App'

export default (props) => {
    const initialState = props;
    const store = createStore(rootReducer, initialState)

    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}