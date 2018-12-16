import React, { Component } from 'react';
import { checkIfLoggedIn } from '../../../backend/functions';
import { Redirect } from 'react-router-dom'
import './Dashboard.css'

//importing the components that are needed
import DashboardHeader from './DashboardHeader/DashboardHeader'
import Sidebar from './Sidebar/Sidebar'
import MenuTable from './MenuTable/MenuTable'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySidebar: false, //display sidebar state varibale
            Menu: []
        }
        document.title = "Dashboard"

        this.signout = this.signout.bind(this)
    }

    componentDidMount = () => {
        // const user = this.props.location.state
        
        // if (typeof(user.roid) !== 'undefined') {
        //     sessionStorage.setItem('roid', user.roid)
        // }

        //this.setState({Menu: this.props.location.state.Menu})

        
    };



    /*when this function is called is sets the 
    displaySidebar state variable to the opposite of what it currently was*/
    displaySidebar = () => {
        this.setState({
            displaySidebar: !this.state.displaySidebar
        })
    }

    signout() {
        sessionStorage.clear();
        this.setState({ displaySidebar: false })

    }

    render() {
        if (!checkIfLoggedIn()) {
            return (
                <Redirect to='/login' />
            )
        }

        //crated a variable called sidebar that is currently set to sidebar.
        let sidebar = null;

        /*This is to check what the displaySidebar varibale is.
        if it's false then the <Sidebar /> isn't rendered.
        if it's true then the <Sidebat /> is rendered.
        */
        if (this.state.displaySidebar) {
            sidebar = (
                <div>
                    <Sidebar displayMethod={this.displaySidebar} signout={this.signout} />
                </div>
            )
        }

        return (
            <div id="dashbard_bg">
                {sidebar}
                <DashboardHeader title="Menu" displayMethod={this.displaySidebar} />
                <MenuTable  />
            </div>
        );
    }
}

export default index;