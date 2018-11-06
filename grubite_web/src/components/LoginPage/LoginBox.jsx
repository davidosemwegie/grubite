import React, { Component } from 'react';
import './LoginBox.css'
import {Panel, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
class LoginBox extends Component {

    onPress () {
        console.log("The button works")
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
                    <Form action='#'>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>{' '}
                        <FormControl type="email" placeholder="Please type in your email here..." />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="password" placeholder="Password" />
                    </FormGroup>{' '}
                    <Link to=''>
                            <Button bsStyle="primary">Log in</Button>
                        </Link>
                    </Form>
                    </Panel.Body>
                </Panel>
                </div>
            </div>
        );
    }
}

export default LoginBox;