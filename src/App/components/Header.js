import React, { Component } from 'react';
import headerLogo from '../../assets/images/scythe_header.jpg'
import '../../styles/main.scss';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <img src={headerLogo} className="header-logo" alt="logo" />
          <p className="header-text">
            Turn Upkeeper
          </p>
        </header>
    );
  }
}

export default Header;