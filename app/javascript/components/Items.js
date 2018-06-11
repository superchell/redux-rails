import React from "react"
import PropTypes from "prop-types"
class Items extends React.Component {
  render () {
    return (
      <React.Fragment>
        Items: {this.props.items.map(function(listVal){
        return <p key={listVal.id}>name: {listVal.name} text: {listVal.text}</p>;
      })}
      </React.Fragment>
    );
  }
}

Items.propTypes = {
  items: PropTypes.array
}

export default Items
