import React from 'react';
import './MenubarButton.css'

const MenubarButton = (props) => {

    // function setTable(key) {
    //     console.log(key)
    // }

    return (
        <button
        onClick={props.onClick}
        id="menuButton"
        >
            {props.label}
        </button>
    );
};

export default MenubarButton;