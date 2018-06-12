import React from 'react'
import {BrowserRouter, StaticRouter, Route, Switch} from 'react-router-dom'

import Home from './HelloWorld';
import Items from './Items';


class Router extends React.Component {
    renderRouter = () => {
        if (typeof window !== 'undefined') {
            return (
                <BrowserRouter>
                    {this.props.children}
                </BrowserRouter>
            )
        } else {
            return (
                <StaticRouter location={this.props.path} context={{}}>
                    {this.props.children}
                </StaticRouter>
            )
        }
    }

    render() {
        return (this.renderRouter())
    }
}

const App = props => {
    const data = props.data;
    return (
        <Router path={props.path} data={props.data}>
            <Switch>
                <Route exact path="/" render={props => ( <Home {...props} data={data} /> )}/>)} />
                <Route path="/items" render={props => ( <Items {...props} data={data} /> )}/>
            </Switch>
        </Router>
    )
}


export default App