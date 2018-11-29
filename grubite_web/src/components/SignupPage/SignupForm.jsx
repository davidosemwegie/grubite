import React, { Component } from 'react';
import {Panel, Form, Button} from 'react-bootstrap'
import {
    Redirect
} from 'react-router-dom'
import FieldGroup from '../common/FieldGroup'


export default class extends Component {
    
    constructor(){
        super()
        document.title = "Sign Up"

        this.state = {
            error : null,
            email: null,
            password: null,
            confirmPassword: null,
            restaurantName: null,
            stressAddress: null,
            province: null,
            city: null,
            postalCode: null,
            succeessfulSignup: false
        }

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

    createRestaurantOwner() {
        const {email, password, confirmPassword, restaurantName} = this.state

        
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
                <div>
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
                        label = "Restaurant Name"
                        type = "text"
                        name = "restaurantName"
                        placeholder="Please type in your Restaurant name here..."
                        onChange={this.handleInputChange}
                        />
                        <FieldGroup 
                        label = "Email"
                        type = "email"
                        name = "email"
                        placeholder="Please type in an email here... This is what is going to be used to log in"
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
                        name = "restaurantName"
                        placeholder="Please type in your Restaurant name here..."
                        onChange={this.handleInputChange}
                        />
                        <FieldGroup 
                        label = "Street Address"
                        type = "text"
                        name = "stressAddress"
                        placeholder="Please type in the street address here..."
                        onChange={this.handleInputChange}
                        />
                        <FieldGroup 
                        label = "Province"
                        type = "text"
                        name = "province"
                        placeholder="Please type in your province here..."
                        onChange={this.handleInputChange}
                        />
                        <FieldGroup 
                        label = "City"
                        type = "text"
                        name = "city"
                        placeholder="Please type in your city here..."
                        onChange={this.handleInputChange}
                        />
                        <FieldGroup 
                        label = "Postal Code"
                        type = "text"
                        name = "postalCode"
                        placeholder="Please type in your postal Code here..."
                        onChange={this.handleInputChange}
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

