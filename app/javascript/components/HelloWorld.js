import React from "react"
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'

export default class HelloWorld extends React.Component {
  render () {
    const {greeting} = this.props;
    return (
      <React.Fragment>
        Greeting: {greeting}
        <NavLink to="/items">Items</NavLink>
      </React.Fragment>
    );
  }
}

