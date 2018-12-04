import React from 'react'
import './SubBarButton.css'

const SubBarButton = (props) => {
    return(
        <button {...props} subcategoryid={props.subcategoryid}>
            {props.children}
        </button>
    )
}

export default SubBarButton;