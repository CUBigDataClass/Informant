import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';

class Amazon extends React.Component {
  render() {
    return (
      <div>
        <PageLayout
          title={'Amazon'}
          description={'Opinions on Amazon Go?'}
          />
      </div>
    );
  }
}

export default Amazon;
