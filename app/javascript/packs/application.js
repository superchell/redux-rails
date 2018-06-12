// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, StaticRouter } from 'react-router-dom'
//
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
//
// import createHistory from "history/createBrowserHistory";
//
// import {
//     ConnectedRouter,
//     routerReducer,
//     routerMiddleware,
//     push
// } from "react-router-redux";
//
// import reducers from "../reducers/index"; // Or wherever you keep your reducers
//
// import App from '../components/App'
//
// export default (data) => {
//     // Create a history of your choosing (we're using a browser history in this case)
//     const history = createHistory();
//
// // Build the middleware for intercepting and dispatching navigation actions
//     const middleware = routerMiddleware(history);
//
// // Add the reducer to your store on the `router` key
// // Also apply our middleware for navigating
//
//     const store = createStore(
//         combineReducers({
//             reducers,
//             router: routerReducer
//         }),
//         applyMiddleware(middleware)
//     );
//
//     store.dispatch({
//         type: 'GET_PROPS',
//         user: data
//     });
//
//     return(
//         <Provider store={store}>
//             {/* ConnectedRouter will use the store from Provider automatically */}
//             <ConnectedRouter history={history}>
//                 <App />
//             </ConnectedRouter>
//         </Provider>
//     )
// }

var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)
