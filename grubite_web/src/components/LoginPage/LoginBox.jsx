import React, { Component } from 'react';
import './LoginBox.css'
import {Panel, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import { BrowserRouter as Router,
    Route,
    Link,
    Redirect} from 'react-router-dom';
import {login, checkLogin} from '../../backend/api'

class LoginBox extends Component {
    

    constructor(props) {
        super();

        this.state = {
            email: "",
            password: "",
            userInfo: [],
            redirect: null,
            LoginMessage: null
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
        const {email, password, userInfo} = this.state
        e.preventDefault();

        // login(email, password)
        //     .then(res => this.changeState(res))
        //     .catch(error => console.log(error))
        
        // var count;
        // login(email, password)
        //     .then(res => res)
        //     .then(function (res) {
        //         count = Object.keys(res).length
        //         //console.log(count)
        //         if (count === 1) {
        //             window.sessionStorage.setItem('loggedIn', 1 )
        //         } else {
        //             window.sessionStorage.setItem('loggedIn', 2 )
        //         }
        //     })
        //     .catch(error => console.log(error))

        // var loginState = window.sessionStorage.getItem('loggedIn')

        // console.log(loginState)

        // if (loginState === 1) {
        //     this.setState({LoginMessage: "Incorrect Login Information"})
        // } else if (loginState === 2) {
        //     this.setState({LoginMessage: "User has been authenicated"})
        //     console.log("User has been authenicated")
        // } else if (loginState === 0) {
        //     this.setState({LoginMessage: null})
        // }
        
        //set the session varibale for the user Id.    
        //window.sessionStorage.setItem('uid', this.state.userInfo)  
        
        //this.setState({redirect: <Redirect to="/dashboard"/>})

        //console.log(this.getLengthOfState())
    }

    changeUserInfoState (a) {
        this.setState({userInfo: a})
    }

    // changeErrorState(a) {
    //     this.setState({errorLoginMessage})
    // }

    // getLengthOfState(){
    //     return Object.keys(this.state.userInfo)
    // }

    render() {
        window.sessionStorage.setItem('loggedIn', 0 )
        return (
            <div>
                {this.state.redirect}
                <div>
                <h1 className="AccessText">Please Log In Access your Grubite Restaurant Portal</h1>
                </div>
                <div className="LoginBox">
                    <Panel>
                    <Panel.Heading>
                        <Panel.Title>Login</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <Form onSubmit={this.login}>
                    <p>{this.state.LoginMessage}</p>
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