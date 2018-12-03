import React from 'react'
import './SubBarButton.css'

const SubBarButton = (props) => {
    return(
        <button className='subBarButton'>
            {props.children}
        </button>
    )
}

export default SubBarButton;