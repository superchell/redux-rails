import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default class Items extends React.Component {
    constructor(props){
        super(props)

        this._getData = () => {
            const link = props.location;
            return(
                fetch(`${link.pathname}?format=json`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        this.setState({
                            items: data,
                            dataLoad: true
                        })
                    })
            )
        }

        this.state = {
            items: [],
            dataLoad: false
        }
    }

    componentDidMount(){
        this._getData();
    }


    render() {
        const {items} = (this.props.location.key != null) ? this.state : this.props.data;
        return (
            <React.Fragment>
                Items: {items.map(function (listVal) {
                    return <p key={listVal.id}>name: {listVal.name} text: {listVal.text}</p>;
                })}
                <NavLink to="/">Home</NavLink>
            </React.Fragment>
        );
    }
}
