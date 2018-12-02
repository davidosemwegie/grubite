import React, { Component } from 'react';
import './MenuBar.css';
import MenubarButton from './MenubarButton'
import ItemForm from '../ItemForm'



let addItemForm = null;

class MenuBar extends Component {

    constructor(){
        super();

        this.state = {
            showForm: false,
            uid: null,
            selected: false
        }

        this.setShowForm = this.setShowForm.bind(this)
        this.select = this.select.bind(this)
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

    select () {
        ///https://stackoverflow.com/questions/42630473/react-toggle-class-onclick
        const currentState = this.state.selected;
        this.setState({selected: !currentState}) 
    }

    render() {
        
        this.displayForm()
        return (
            <div className='menubar'>
            {addItemForm}
                <ul className="menubarList">
                    <li className="menubarListItem"><MenubarButton calegory={null} label="All" onClick={this.props.onClick}/></li>
                    <li className="menubarListItem"><MenubarButton category="1" label="Appetizers" onClick={this.props.onClick}/></li>
                    <li className="menubarListItem"><MenubarButton category="2" label="Mains" onClick={this.props.onClick}/></li>
                    <li className="menubarListItem"><MenubarButton category="3" label="Desserts" onClick={this.props.onClick}/></li>
                    <li className="menubarListItem"><MenubarButton category="4" label="Drinks" onClick={this.props.onClick}/></li>
                    <li className="menubarListItem">
                        <MenubarButton onClick={this.setShowForm} label="&#43;" />
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