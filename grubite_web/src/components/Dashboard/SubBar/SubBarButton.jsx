import React from 'react'
import './SubBarButton.css'

const SubBarButton = (props) => {
    return(
        <button {...props}>
            {props.children}
        </button>
    )
}

export default SubBarButton;