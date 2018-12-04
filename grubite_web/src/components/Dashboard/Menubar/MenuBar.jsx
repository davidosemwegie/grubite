import React, { Component } from 'react';
import './MenuBar.css';
import MenubarButton from './MenubarButton'
import ItemForm from '../ItemForm'
import AddItemButton from '../MenuTable/AddItemButton'



let addItemForm = null;

class MenuBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
            uid: null,
            selected: false,
            activeIndex: 0
        }

        this.setShowForm = this.setShowForm.bind(this)
        this.select = this.select.bind(this)
    }

    //This is the method that set the state.showForm variable
    setShowForm() {
        const { showForm } = this.state
        this.setState({ showForm: !showForm })
    }



    displayForm() {
        const { showForm } = this.state

        if (showForm) {
            addItemForm = (
                <div>
                    <ItemForm exitMethod={this.setShowForm} />
                </div>
            )
        } else {
            addItemForm = null;
        }
    }

    select(index, e) {
       this.setState({activeIndex: index});
    }

    render() {

        //Style of the active menu category 
        const activeStyle = { color: 'red' };
        
        this.displayForm()
        return (
            <div className='menubar'>
                {addItemForm}
                <ul className="menubarList">
                    <li className="menubarListItem" onClick={this.select.bind(this, 0)}><MenubarButton category={null} className={this.state.activeIndex===0 ? 'selectedCategory': ""} label="All" onClick={this.props.setCategory} /></li>
                    <li className="menubarListItem" onClick={this.select.bind(this, 1)}><MenubarButton category="1" className={this.state.activeIndex===1 ? 'selectedCategory': ""} label="Appetizers" onClick={this.props.setCategory} /></li>
                    <li className="menubarListItem" onClick={this.select.bind(this, 2)}><MenubarButton category="2" className={this.state.activeIndex===2 ? 'selectedCategory': ""} label="Mains" onClick={this.props.setCategory} /></li>
                    <li className="menubarListItem" onClick={this.select.bind(this, 3)}><MenubarButton category="3" className={this.state.activeIndex===3 ? 'selectedCategory': ""} label="Desserts" onClick={this.props.setCategory} /></li>
                    <li className="menubarListItem" onClick={this.select.bind(this, 4)}><MenubarButton category="4" className={this.state.activeIndex===4 ? 'selectedCategory': ""} label="Drinks" onClick={this.props.setCategory} /></li>
                    <li className="menubarListItem">
                        <div className="addButton">
                            <AddItemButton onClick={this.setShowForm} />
                        </div>

                    </li>
                    {/* <li className="menubarListItem searchbar">
                        <input name="searchValue" className="menuSearchbar" type="text" placeholder="Search For Menu Items" onChange={this.props.onChange}/>
                    </li> */}
                </ul>
            </div>
        );
    }
}

export default MenuBar;