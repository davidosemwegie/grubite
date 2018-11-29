import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//import needed components
import LoginPage from './components/LoginPage'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/login" component={LoginPage} />  
        </Router>
      </div>
    );
  }
}

export default App;
