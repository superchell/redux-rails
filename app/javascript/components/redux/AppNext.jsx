import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const { greeting } = this.props.user
        return (
            <div>
                <p>Второй рутинг, {greeting}!</p>
            </div>
        )
    }

}


function mapStateToProps (state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App)