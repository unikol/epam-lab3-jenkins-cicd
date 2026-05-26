import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="main logo" />
          <h1 className="App-title">MAIN Environment</h1>
        </header>
        <p className="App-intro">
          Jenkins CI/CD deployment for the main branch.
        </p>
      </div>
    );
  }
}

export default App;