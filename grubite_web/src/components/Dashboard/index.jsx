import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import DashboardHeader from './DashboardHeader'
import './Dashboard.css'
import MenuBar from './Menubar/MenuBar'
import MenuTable from './MenuTable'

export default class extends Component {

    constructor(){
        super();
        this.state ={users: []};
    }

    //set the state of the display sidebar to false
    state = {
        displaySidebar: false
    }
    
    /*when this function is called is sets the 
    displaySidebar state variable to the opposite of what it currently was*/
    displaySidebar = () => {
        this.setState({
            displaySidebar: !this.state.displaySidebar
        })

    }
2

    render() {
        //crated a variable called sidebar that is currently set to sidebar.
        let sidebar = null; 

        /*This is to check what the displaySidebar varibale is.
        if it's false then the <Sidebar /> isn't rendered.
        if it's true then the <Sidebat /> is rendered.
        */
        if ( this.state.displaySidebar ) {
            sidebar = (
            <div>
                 <Sidebar displayMethod={this.displaySidebar}/>
            </div>
            )
       }
        return (
            <div className="dashboardPage">
                {sidebar}
                <DashboardHeader title="Menu" displayMethod={this.displaySidebar}/>
                <MenuBar />
                <MenuTable />
            </div>
        );
    }
}
