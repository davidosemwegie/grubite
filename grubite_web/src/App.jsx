import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/login/Header'
import LoginBox from './components/login/LoginBox'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <h1 className="AccessText">Access your Grubite Restaurant Portal</h1>
        <LoginBox />
        </div>
      </Router>
    );
  }
}

export default App;
