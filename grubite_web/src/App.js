import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//import needed components
import LoginPage from './Restuarant_Portal/components/LoginPage'
import SignupPage from './Restuarant_Portal/components/SignupPage'
import Dashboard from './Restuarant_Portal/components/Dashboard'
import HomePage from './Website/Pages/HomePage'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={HomePage}/>
            <Route path="/login" component={LoginPage} /> 
            <Route path='/signup' component={SignupPage}/>
            <Route path="/dashboard" component={Dashboard}/> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
