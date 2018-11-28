import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css'

export default class Sidebar extends Component {
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
                            <Link to="/login"><p>Sign Out</p></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}