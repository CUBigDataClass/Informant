import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Uber extends React.Component {
  render() {
    return (
      <div className='page'>
        <PageLayout
          title={'Uber'}
          description={'This is the Uber page.'}
          />
      </div>
    );
  }
}

export default Uber;
