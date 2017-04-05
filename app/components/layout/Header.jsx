import React from 'react';
import Navbar from './Navbar.jsx';

class Header extends React.Component {
  render() {
    return (
      <div className={'Header'}>
        <Navbar/>
      </div>
      );
  }
}

export default Header;
