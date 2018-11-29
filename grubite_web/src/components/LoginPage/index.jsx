import React, { Component } from 'react';
import '../common/Common.css'

//importing the needed components
import LoginBox from './LoginBox'

class index extends Component {
    render() {
        return (
            <div>
                <h1 className="portalPageHeader">Please Log In Access your Grubite Restaurant Portal</h1>
                <LoginBox/>
            </div>
        );
    }
}

export default index;