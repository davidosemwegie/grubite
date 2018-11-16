import React, { Component } from 'react';
import {Panel, Form, Button} from 'react-bootstrap'
// import {
//     Link
// } from 'react-router-dom'
import FieldGroup from '../common/FieldGroup'
import {createRestaurantOwner} from '../../backend/api'


export default class extends Component {
    
    constructor(){
        super()
        document.title = "Sign Up"

        this.state = {
            error : null,
            email: null,
            password: null,
            confirmPassword: null,
        }

        this.createUser = this.createUser.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    //This is the method that is called when an input value is changed
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
        [name]: value
        });
    }

    createUser () {
        //get variables from the state
        const {email, password, confirmPassword} = this.state


        if (password !== confirmPassword) {
            this.setState({error: "Passwords Do not match"})
        } else {
            this.setState({error: null})
            createRestaurantOwner(email, password)
        }
    }
    
    render() {
        return (
            <div>
                <div >
                <h1 className="AccessText">Sign Up to Access your Grubite Restaurant Portal</h1>
                </div>
                <div className="LoginBox">
                    <Panel>
                    <Panel.Heading>
                        <Panel.Title>Sign Up</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <p>{this.state.error}</p>
                    <Form>
                        <FieldGroup 
                        label = "Email"
                        type = "email"
                        name = "email"
                        placeholder="Please type in your email here..."
                        onChange={this.handleInputChange}
                        />
                        <FieldGroup 
                        label = "Password"
                        type = "password"
                        name = "password"
                        placeholder = "Please create a password"
                        onChange={this.handleInputChange}
                        />
                        <FieldGroup 
                        label = "Confirm Password"
                        type = "password"
                        name = "confirmPassword"
                        placeholder = "Please confirm your password"
                        onChange={this.handleInputChange}
                        />
                        {/* <FieldGroup 
                        label = "Restaurant Name"
                        type = "text"
                        placeholder="Please type in the name of your restaurant here..."
                        /> */}
                    <div className="loginButtonContainer">
                    <Button bsStyle="primary" className="loginButton primary" onClick={this.createUser}>Sign up</Button>
                    </div>
                    </Form>
                    </Panel.Body>
                </Panel>
                </div>
            </div>
        );
    }
}

