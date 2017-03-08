import React from 'react';
import Navbar from './Navbar.jsx';

class Header extends React.Component {
  render() {
    return (
      <div className={'Header'}>
        <h1>
          Informant
          <Navbar/>
        </h1>
      </div>
      );
  }
}

export default Header;
