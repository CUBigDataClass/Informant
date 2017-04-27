import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Microsoft extends React.Component {
  render() {
    return (
      <div className='page'>
        <PageLayout
          title={'Microsoft'}
          description={'This is the Microsoft page.'}
          />
      </div>
    );
  }
}

export default Microsoft;
