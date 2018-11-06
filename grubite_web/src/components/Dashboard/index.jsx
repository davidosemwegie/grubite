import React, { Component } from 'react';
import Sidebar from './Sidebar'

export default class extends Component {

    componentDidMount(){
        document.title = "Dashboard"
    }
    
    render() {
        return (
            <div>
                <Sidebar />
            </div>
        );
    }
}
