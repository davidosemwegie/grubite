import React, { Component } from 'react';
import axios from 'axios'
import './LoginBox.css'
import {Panel,
        Form, 
        FormGroup, 
        ControlLabel, 
        FormControl, 
        Button} from 'react-bootstrap'

import {Link, Redirect} from 'react-router-dom'
import {checkIfLoggedIn} from '../../backend/functions'
import ErrorMessage from '../common/ErrorMessage/ErrorMessage'

class LoginBox extends Component {

    constructor(props) {
        super();

        this.state = {
            email: "",
            password: "",
            userInfo: {},
            redirect: null,
            errorMessage: ""
            
        }
        
        this.login = this.login.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    //This is the function that is going to be called when a value is changed
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;    
        this.setState({
            [name]: value
        });
    }

    login(e) {
        e.preventDefault();

        const {email, password} = this.state

        const userInfo = {
            email,
            password
        }

        const url = `http://localhost:3001/users/login`

        //request to the server
        axios.post(url, userInfo)
            .then(res => {
                this.setState({userInfo: res.data})

                const {userInfo} = this.state
                
                //check if the retured array actually has any values
                if (typeof(userInfo) !== 'undefined') {
                    const id = userInfo.roid
                    const rName = userInfo.rName

                    sessionStorage.setItem('roid', id)
                    sessionStorage.setItem('rName', rName)

                    this.setState({errorMessage: ""})
                } else {
                    this.setState({errorMessage: "Incorrect Login Information"})
                }
            })
    }

    render() {

        if (checkIfLoggedIn()) {
            return(
                <Redirect to='/'/>
            )
        }
           

        return (
            <div>
                <div className="LoginBox">
                    <Panel>
                    <Panel.Heading>
                        <Panel.Title>Login</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
                    <Form onSubmit={this.login}>
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" name='email' placeholder="Please type in your email here..." onChange = {this.handleInputChange}/>
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlinePassword">
                        <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl type="password" name="password" placeholder="Password" onChange = {this.handleInputChange}/>
                    </FormGroup>{' '}
                    <div className="loginButtonContainer">
                    <Button bsStyle="primary" className="loginButton primary" type='submit'>Log in</Button>
                    </div>
                    </Form>
                    <Link to="/forgotPassword">
                        <p><b>Forgot your password?</b></p>
                    </Link>
                    </Panel.Body>
                </Panel>
                <div>
                    <Link to="/signup">
                        <p>Dont have an account ? <b>Sign up</b></p>
                    </Link>
                </div>
                </div>
            </div>
        );
    }
}

export default LoginBox;