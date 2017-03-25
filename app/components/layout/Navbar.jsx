import React from 'react';

class Navbar extends React.Component {
  render() {
    var companies = ['Apple', 'Google', 'Twitter', 'Facebook']

    return (
      <div className={'Navbar'}>
      {companies.map((name, i) =>  <button className={'navBarButton'}><p>{name}</p></button>)}
      <h1>Informant</h1>
      </div>
    )
  }
}

export default Navbar;
