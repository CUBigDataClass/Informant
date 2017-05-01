import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Apple extends React.Component {
  render() {
    return (
      <div>
        <PageLayout
          title={'Apple'}
          description={"When's the new Macbook Pro coming out?"}
          />
      </div>
    );
  }
}

export default Apple;
