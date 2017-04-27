import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Twitter extends React.Component {
  render() {
    return (
      <div className='page'>
        <PageLayout
          title={'Twitter'}
          description={'This is the Twitter page.'}
          />
        <div className='page-bg-image-container'>
          <img className='page-bg-image' src={require('../assets/images/mountains.jpg')} />
        </div>
      </div>
    );
  }
}

export default Twitter;
