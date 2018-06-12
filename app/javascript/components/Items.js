import React, { Component } from 'react'
import { connect } from 'react-redux'

class Items extends React.Component {
    render() {
        const {items} = this.props.items;
        return (
            <React.Fragment>
                Items: {items.map(function (listVal) {
                return <p key={listVal.id}>name: {listVal.name} text: {listVal.text}</p>;
            })}
            </React.Fragment>
        );
    }
}

function mapStateToProps (state) {
    return {
        items: state
    }
}

export default connect(mapStateToProps)(Items)