import React, { Component } from 'react';
//import LoginContainer from './components/Login/LoginContainer'
//import axios from 'axios'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form action="http://localhost:3001/create_restaurant_owner" method="POST">
          <h1>Login Form</h1>
          <input type="email" name="email" placeholder="email"/>
          <input type="password" name="password" placeholder="password"/>
          <button>sumbit</button>
        </form>
      </div>
    );
  }
}

export default App;
