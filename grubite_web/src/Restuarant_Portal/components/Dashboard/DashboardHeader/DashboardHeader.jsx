import React, { Component } from 'react';
import './DashboardHeader.css';

export default class DashboardHeader extends Component {
    render() {
        return (
            <nav className="dbHeader">
            <ul className="dbHeaderList">
                <li className="dbHeaderListItem">
                <button className="menuButton" onClick={this.props.displayMethod}>
                    &#9776;
                </button>
                </li>
                <li className= "headerTitle dbHeaderListItem">{this.props.title}</li>
                <li className="profilePictureContainer dbHeaderListItem">
                    {/* <button className="profilePicture">&#9786;</button> */}
                    <button className="profilePicture headerTitle">{sessionStorage.getItem('rName')}</button>
                </li>
            </ul>
            </nav>
        );
    }
}