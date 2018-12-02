import React from 'react';
import './MenubarButton.css'

const MenubarButton = (props) => {

    

    return (
        <button onClick={props.onClick} id="menuButton" category={props.category} className={props.className}>
            {props.label}
        </button>
    );
};

export default MenubarButton;