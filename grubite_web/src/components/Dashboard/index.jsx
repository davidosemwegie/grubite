import React, { Component } from 'react';
import {checkIfLoggedIn} from '../../backend/functions';
import {Redirect} from 'react-router-dom'

class index extends Component {
    render() {
        if (!checkIfLoggedIn()) {
            return(
                <Redirect to='/login'/>
            )
        }
        return (
            <div>
                {sessionStorage.getItem('rName')}
            </div>
        );
    }
}

export default index;