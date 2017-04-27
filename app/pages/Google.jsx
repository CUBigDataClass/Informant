import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Google extends React.Component {
  render() {
    return (
      <div className='page'>
        <PageLayout
          title={'Google'}
          description={'This is the Google page.'}
          />
      </div>
    );
  }
}

export default Google;
