import React, { Component } from 'react';
import './AddItemButton.css'

class AddItemButton extends Component {
    render() {
        return (
            // <button className="addItemButton">&#43;</button>
            <button className="addItemButton" onClick={this.props.onClick}>Add Food Item</button>
        );
    }
}

export default AddItemButton;