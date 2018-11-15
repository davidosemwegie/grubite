import React, { Component } from 'react';
import Header from '../Header'
import {Panel, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'
export default class extends Component {
    
    constructor(){
        super()

        document.title = "Sign Up"
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
                    <Form>
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" name='email' placeholder="Please type in your email here..." onChange = {this.emailChange}/>
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlinePassword">
                        <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl type="password" name="password" placeholder="Password" onChange = {this.passwordChange}/>
                    </FormGroup>{' '}
                    <div className="loginButtonContainer">
                    <Button bsStyle="primary" className="loginButton primary">Sign up</Button>
                    </div>
                    </Form>
                    </Panel.Body>
                </Panel>
                </div>
            </div>
        );
    }
}

