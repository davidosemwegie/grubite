import React, { Component } from 'react';
import './LoginBox.css'
import {Panel, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LoginBox extends Component {

    onPress () {
        console.log("The button works")
    }

    handler = (e) => {
        // do some validation
        this.refs.loginForm.submit();
    };

    state = {
        email: ""
    }
    

    handleChange = e => {
        this.setState({email: e.target.value})
        console.log(this.state.email)
    }

    render() {
        return (
            <div>
                <div>
                <h1 className="AccessText">Please Log In Access your Grubite Restaurant Portal</h1>
                </div>
                <div className="LoginBox">
                    <Panel>
                    <Panel.Heading>
                        <Panel.Title>Login</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <Form>
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Name</ControlLabel>{' '}
                        <FormControl type="email" name='email' placeholder="Please type in your email here..." onChange = {this.handleChange}/>
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlinePassword">
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="password" name="password" placeholder="Password" />
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