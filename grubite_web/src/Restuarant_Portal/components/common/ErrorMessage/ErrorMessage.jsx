//This the component that is going to be shown there is an error when submitting a form
import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = (props) => {
    return(
        <p id='errorMessage'>{props.children}</p>
    )
}

export default ErrorMessage