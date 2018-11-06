import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Dashboard from './components/Dashboard';
//import Dashboard from './components/Dashboard'
class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
        {/* <Header />
        <LoginBox /> */}
        <Route path="/login" render={
          () => 
          <LoginPage />
        }/>

        <Route path="/signup" render={
          () =>
          <SignupPage />
        }/>

        <Route path="/dashboard" render={
          () =>
          <Dashboard />
        }/>

        </div>
      </Router>
    );
  }
}

export default App;
