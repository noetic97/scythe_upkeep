import React, { Component } from 'react';
import headerLogo from '../assets/images/scythe_header.jpg'
import '../styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={headerLogo} className="header-logo" alt="logo" />
          <p className="header-text">
            Turn Upkeeper
          </p>
        </header>
      </div>
    );
  }
}

export default App;
