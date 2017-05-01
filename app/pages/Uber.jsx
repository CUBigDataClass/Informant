import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Uber extends React.Component {
  render() {
    return (
      <div>
        <PageLayout
          title={'Uber'}
          description={'This is how people feel about modern-day taxi services.'}
          />
      </div>
    );
  }
}

export default Uber;
