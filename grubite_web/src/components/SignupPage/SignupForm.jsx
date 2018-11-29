import React, { Component } from 'react';
import {Panel, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {
    Redirect
} from 'react-router-dom'
import {checkIfLoggedIn} from '../../backend/functions'
import FieldGroup from '../common/FieldGroup'
import ErrorMessage from '../common/ErrorMessage/ErrorMessage'


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
            succeessfulSignup: false,
            passwordMismatchMessage: "",
            errorMessage: "",
            id: "",
            returnedData: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createRestaurantOwner = this.createRestaurantOwner.bind(this)
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

    createRestaurantOwner(e) {
        e.preventDefault();

        const {email, password, confirmPassword, restaurantName} = this.state

        if (password !== confirmPassword) {
            this.setState({passwordMismatchMessage: "Your passwords do not match"})
        } else {
            this.setState({passwordMismatchMessage: ""})
            const ownerInformation = {
                email,
                password, 
                restaurantName
            }

            const url = "http://localhost:3001/users/createOwner"

            axios.post(url, ownerInformation)
                .then(res => {

                    this.setState({returnedData: res.data.rows})

                    const {returnedData} = this.state

                    if (typeof(returnedData) !== 'undefined') {
                        const id = returnedData.insertId
                        const rName = restaurantName

                        sessionStorage.setItem('id', id)
                        sessionStorage.setItem('rName', rName)

                        this.setState({errorMessage: ""})
                        
                    } else {
                        this.setState({errorMessage: "Something went wrong, Please try again later"})
                    }
                })
        }
    }


    render() {

        if (checkIfLoggedIn()) {
            return(
                <Redirect to='/'/>
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
                    <Form onSubmit={this.createRestaurantOwner}>
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
                        <ErrorMessage>{this.state.passwordMismatchMessage}</ErrorMessage>
                        <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
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

