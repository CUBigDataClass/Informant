import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Apple extends React.Component {
  render() {
    return (
      <div className='page'>
        <PageLayout
          title={'Apple'}
          description={'This is the Apple page.'}
          />
      </div>
    );
  }
}

export default Apple;
