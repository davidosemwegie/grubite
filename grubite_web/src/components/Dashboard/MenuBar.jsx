import React, { Component } from 'react';
import './MenuBar.css'

class MenuBar extends Component {
    render() {
        return (
            <div className='menubar'>
                <ul className="menubarList">
                    <li className="menubarListItem"><p>Appetizers</p></li>
                    <li className="menubarListItem"><p>Mains</p></li>
                    <li className="menubarListItem"><p>Desserts</p></li>
                    <li className="menubarListItem"><p>Drinks</p></li>
                    <li className="menubarListItem">
                        <button className="addItemButton">
                            &#43;
                        </button>
                    </li>
                    <li className="menubarListItem searchbar">
                        <input className="menuSearchbar" type="text" placeholder="Search For Menu Items"/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MenuBar;