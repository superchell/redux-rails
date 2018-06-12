import React from "react"
import {connect} from "react-redux";

class HelloWorld extends React.Component {
  render () {
    const {greeting} = this.props.greeting;
    return (
      <React.Fragment>
        Greeting: {greeting}
      </React.Fragment>
    );
  }
}

function mapStateToProps (state) {
    return {
        greeting: state
    }
}

export default connect(mapStateToProps)(HelloWorld)
