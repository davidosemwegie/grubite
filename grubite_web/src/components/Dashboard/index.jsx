import React, { Component } from 'react';

export default class extends Component {

    componentDidMount(){
        document.title = "Dashboard"
    }
    
    render() {
        return (
            <div>
                This is the dashboard
            </div>
        );
    }
}
