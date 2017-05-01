import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Microsoft extends React.Component {
  render() {
    return (
      <div>
        <PageLayout
          title={'Microsoft'}
          description={'What does Microsoft even do anymore?'}
          />
      </div>
    );
  }
}

export default Microsoft;
