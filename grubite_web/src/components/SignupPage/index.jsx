import React, { Component } from 'react';
import {Panel, Form, Button} from 'react-bootstrap'
import {
    Redirect
} from 'react-router-dom'
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
            succeessfulSignup: false
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

    createUser(event) {
        event.preventDefault();
        //get variables from the state
        const {email, password, confirmPassword} = this.state
        //check if the password and confirmPassword varibables have the same values
        if (password !== confirmPassword) {
            //true: set the error state variable to say "Passwords do not match"
            this.setState({error: "Passwords Do not match"})
        } else {
            //call the reate Restaurant Owner method
            this.setState({error: null})
            //this.setState({succeessfulSignup: createRestaurantOwner(email, password)})
            createRestaurantOwner(email, password)
            .then(res => this.setState({succeessfulSignup: res.success}))
            .catch(error => console.log(error))
        }
    }
    

    render() {
        
        const {succeessfulSignup} = this.state

        if (succeessfulSignup) {
            return (
                <Redirect to='/login'/>
            )
        }

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
                    <Form onSubmit={this.createUser}>
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
                    <Button bsStyle="primary" className="loginButton primary" type='submit'>Sign up</Button>
                    </div>
                    </Form>
                    </Panel.Body>
                </Panel>
                </div>
            </div>
        );
    }
}

