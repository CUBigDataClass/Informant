import React from 'react';

class Navbar extends React.Component {
  render() {
    var companies = ['Apple', 'Google', 'Twitter', 'Facebook']

    return (
      <div className={'Navbar'}>
      {companies.map((name, i) =>  <button className={'navBarButton'}>{name}</button>)}
      </div>
    )
  }
}

export default Navbar;
