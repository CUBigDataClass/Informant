import React from 'react';

class Navbar extends React.Component {
  render() {
    var companies = ['Apple', 'Google', 'Twitter', 'Facebook']

    return (
      <div className={'Navbar'}>
        <h1>Informant</h1>
      {companies.map((name, i) =>  <button className={'navBarButton'}><p>{name}</p></button>)}
      </div>
    )
  }
}

export default Navbar;
