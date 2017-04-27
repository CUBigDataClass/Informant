import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';

class Amazon extends React.Component {
  render() {
    return (
      <div className='page'>
        <PageLayout
          title={'Amazon'}
          description={'This is the Amazon page.'}
          />
      </div>
    );
  }
}

export default Amazon;
