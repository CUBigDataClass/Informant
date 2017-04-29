import React from 'react';
import {Link} from 'react-router';
import HomePageLayout from '../layout/HomePageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HomeGraphLayout from '../layout/GraphLayout.jsx';

class Google extends React.Component {
  render() {
    return (
      <div>
        <HomePageLayout
          title={'Top Companies'}
          description={'We are visualizing the general mood of the public on top companies.'}
          />
      </div>
    );
  }
}

export default Google;
