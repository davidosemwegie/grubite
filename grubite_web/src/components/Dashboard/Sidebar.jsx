import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <p>GRUBITE</p>
                    </div>

                    <ul className="list-unstyled components">
                        <li className="navItem">
                            <Link to='/viewMenu'>
                                <p>View Menu</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}