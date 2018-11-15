import React, { Component } from 'react';
import './LoginBox.css'
import {Panel, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import { BrowserRouter as Router,
    Route,
    Link,
    Redirect, 
    Switch} from 'react-router-dom';
import axios from 'axios'
import Dashboard from '../Dashboard';

class LoginBox extends Component {

    constructor(props) {
        super();

        this.state = {
            email: "",
            password: "",
            userInfo: [],
            redirectToReffer: false,
        }
        
        this.login = this.login.bind(this)
    }

    
    emailChange = e => {
        this.setState({email: e.target.value})
    }

    passwordChange = e => {
        this.setState({password: e.target.value})
    }

    login(e) {

        const {email, password, userInfo} = this.state;
        e.preventDefault();
        var user
        axios.post('http://localhost:3001/user/login', {
            email: email,
            password: password
            })
        .then(function (response) {
            //user = response
            console.log(response.data.result)
            })
        .catch(function (error) {
            console.log(error);
        });

        this.setState({userInfo: user})

        console.log(userInfo)
    }

    render() {

        return (
            <div>
                <div >
                <h1 className="AccessText">Please Log In Access your Grubite Restaurant Portal</h1>
                </div>
                <div className="LoginBox">
                    <Panel>
                    <Panel.Heading>
                        <Panel.Title>Login</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <Form onSubmit={this.login}>
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" name='email' placeholder="Please type in your email here..." onChange = {this.emailChange}/>
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlinePassword">
                        <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl type="password" name="password" placeholder="Password" onChange = {this.passwordChange}/>
                    </FormGroup>{' '}
                    <div className="loginButtonContainer">
                    {/* <Link to='/dashboard'>
                        <Button bsStyle="primary" className="loginButton primary" type='submit'>Log in</Button>
                    </Link> */}
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