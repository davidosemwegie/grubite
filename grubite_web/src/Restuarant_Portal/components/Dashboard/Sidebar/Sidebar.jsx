import React, { Component } from 'react';
import './Sidebar.css'

export default class Sidebar extends Component {

    // constructor(){
    //     super();
    // }

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <p>GRUBITE</p>
                    </div>
                    <ul className="sidebarList">
                        <li className="navItem">
                            <button onClick={this.props.displayMethod}>
                                Close
                            </button>
                        </li>
                        <li className="navItem active"><p>View Menu</p></li>
                        <li className="navItem">
                            <button onClick={this.props.signout}><p>Sign Out</p></button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}