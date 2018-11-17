import React, { Component } from 'react';
import './LoginBox.css'
import {Panel, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import { BrowserRouter as Router,
    Route,
    Link,
    Redirect} from 'react-router-dom';
import {login} from '../../backend/api'

class LoginBox extends Component {

    constructor(props) {
        super();

        this.state = {
            email: "",
            password: "",
            userInfo: []
        }
        
        this.login = this.login.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
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

    login(e) {
        e.preventDefault();
        const {email, password, userInfo} = this.state

        login(email, password)
        .then(res => this.setState({userInfo: res.result[0]}))
        .catch(error => console.log(error))

        console.log(userInfo)
        //localStorage.setItem('roid', userInfo)

        //console.log(localStorage.getItem('roid'))
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