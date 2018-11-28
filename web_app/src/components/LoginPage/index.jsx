import React, { Component } from 'react';
import Header from '../Header'
import LoginBox from './LoginBox'

export default class extends Component {

    componentDidMount(){
        document.title = "Login"
    }
    
    render() {
        return (
            <div>
                <Header />
                <LoginBox />
            </div>
        );
    }
}

// export default index;