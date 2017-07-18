import React, { Component } from 'react';
import logo from './logo.svg';

import {
  Route,
  Link
} from 'react-router-dom'

import GamesPage from './GamesPage';
import LoginPage from './LoginPage';
import './App.css';

export class App extends Component {
  constructor(state) {
    super();
    console.log("state is ", state);
  }
  render() {
    return (
      <div className="App">     
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="/games">Games</Link> |
           <Link to="/login"> Login</Link>
        </p>
        <Route exact path="/games" component={GamesPage} />
        <Route path="/login" component={LoginPage} />        
      </div>
    );
  }
}

export default App;
