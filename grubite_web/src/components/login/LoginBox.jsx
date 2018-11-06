import React, { Component } from 'react';
import './LoginBox.css'
import {Panel, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class LoginBox extends Component {

    onPress () {
        console.log("The button works")
    }
    render() {
        return (
            <div className="LoginBox">
                <Panel>
                <Panel.Heading>
                    <Panel.Title>Login</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <Form action="#">
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Name</ControlLabel>{' '}
                    <FormControl type="email" placeholder="Please type in your email here..." />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineEmail">
                    <ControlLabel>Email</ControlLabel>{' '}
                    <FormControl type="password" placeholder="Password" />
                </FormGroup>{' '}
                <Button type="submit" onSubmit={this.onPress}>Log In</Button>
                </Form>
                </Panel.Body>
            </Panel>
            </div>
        );
    }
}

export default LoginBox;