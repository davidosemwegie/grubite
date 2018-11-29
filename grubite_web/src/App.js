import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//import needed components
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/login" component={LoginPage} /> 
            <Route exact path="/" component={Dashboard}/> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
