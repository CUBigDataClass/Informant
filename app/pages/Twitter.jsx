import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Twitter extends React.Component {
  render() {
    return (
      <div>
        <PageLayout
          title={'Twitter'}
          description={'What are people feeling about Twitter?'}
          pageName={this.props.pageName}
          />
      </div>
    );
  }
}

export default Twitter;
