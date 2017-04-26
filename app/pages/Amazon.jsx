import React from 'react';

class Amazon extends React.Component {
  render() {
    return (
      <div className={'Home'}>
        <div className={'header'}>
          <div className={'header-box'}>
            <div className={'title'}>
              <h1>Informant</h1>
            </div>
            <div className={'subtitle'}>
              <p>A social metrics dashboard.</p>
            </div>
          </div>
        </div>
        <div className='home-bg-image-container'>
          <img className='home-bg-image' src={require('../assets/images/mountains.jpg')} />
        </div>
      </div>
    );
  }
}

export default Amazon;
