import React, { Component } from 'react';
import '../common/Common.css'

//importing the components that are needed
import SignupForm from './SignupForm'

class index extends Component {
    render() {
        return (
            <div>
                <h1 className='portalPageHeader'>Please Sign Up</h1>
                <SignupForm />
            </div>
        );
    }
}

export default index;