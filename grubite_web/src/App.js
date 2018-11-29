import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//import needed components
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/login" component={LoginPage} /> 
            <Route path='/signup' component={SignupPage}/>
            <Route exact path="/" component={Dashboard}/> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
