import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './MenuBar.css';
import MenubarButton from './MenubarButton'
import ItemForm from '../ItemForm'

let addItemForm = null;

class MenuBar extends Component {

    constructor(){
        super();

        this.state = {
            showForm: false
        }

        this.setShowForm = this.setShowForm.bind(this)
    }

    //This is the method that set the state.showForm variable
    setShowForm() {
        const {showForm} = this.state
        this.setState({showForm: !showForm})
    }

    displayForm() {
        const {showForm} = this.state
        
        if (showForm) {
            addItemForm = (
                <div>
                    <ItemForm exitMethod={this.setShowForm}/>
                </div>
            )
        } else {
            addItemForm = null;
        }
    }

    render() {
        
        this.displayForm()
        return (
            <div className='menubar'>
            {addItemForm}
                <ul className="menubarList">
                    <li className="menubarListItem"><MenubarButton key='1' label="Appetizers"/></li>
                    <li className="menubarListItem"><MenubarButton key='2' label="Mains"/></li>
                    <li className="menubarListItem"><MenubarButton key='3' label="Desserts"/></li>
                    <li className="menubarListItem"><MenubarButton key='4' label="Drinks"/></li>
                    <li className="menubarListItem">
                        <MenubarButton onClick={this.setShowForm} label="&#43;" />
                        {/* <button 
                        onClick={this.showform}
                        className="addItemButton">
                            &#43;
                        </button> */}
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