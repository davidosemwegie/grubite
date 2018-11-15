import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import './components/LoginPage/LoginBox.css'
import { BrowserRouter as Router,
  Route,
  Link,
  Redirect, 
  Switch} from 'react-router-dom';
import {Panel, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
//import LoginBox from './components/LoginPage/LoginBox'
import SignupPage from './components/SignupPage'
import Dashboard from './components/Dashboard';
import ItemForm from './components/Dashboard/ItemForm'


  //fake authenication method
  const fakeAuth = {
    isAuthenticated: false, 
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) //fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

class LoginBox extends Component {
 
  state = {
      email: "",
      password: "",
      userInfo: [],
      redirectToReffer: false,
  }

   //login function
   login = () =>{
    fakeAuth.authenticate(()=>{
      this.setState({redirectToReffer: true})
    })
  }

  emailChange = e => {
    this.setState({email: e.target.value})
}

passwordChange = e => {
    this.setState({password: e.target.value})
}


  render() {
    const {redirectToReffer} = this.state
    //creates a 'from' state variable that gets the locaton from where the user was trying to access the page from
    //const { from } = this.props.location.state || {from: {pathname: "/"}}

    if (redirectToReffer === true) {
      return (
        <Redirect to='/dashboard'/>
      )
    }

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
            <Button bsStyle="primary" className="loginButton primary" onClick={this.login}>Log in</Button>
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

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props)=> (
    fakeAuth.isAuthenticated === true 
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/login",
        state: { from: props.location}
      }}/>
  )}/>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path='/login' component={LoginBox}/>
        {/* <PrivateRoute path='/dashboard' component={Dashboard}/> */}
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/addItem' component={ItemForm}/>
        <Route path='/signup' component={SignupPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
