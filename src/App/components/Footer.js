import React from 'react';
import '../../styles/main.scss';

const year = (new Date()).getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <small>Kapkamp Productions &copy; {year}</small>
    </footer>
  )
}

export default Footer;