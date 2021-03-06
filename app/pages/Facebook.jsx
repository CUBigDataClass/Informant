import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Facebook extends React.Component {
  render() {
    return (
      <div>
        <PageLayout
          title={'Facebook'}
          description={"What's up with Facebook?"}
          pageName={this.props.pageName}
          />
      </div>
    );
  }
}

export default Facebook;
