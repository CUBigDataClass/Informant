import React from 'react';
import Navbar from './Navbar.jsx';

class Header extends React.Component {
  render() {
    return (
      <h1>
        Header
        <Navbar/>
      </h1>
      );
  }
}

export default Header;
