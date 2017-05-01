import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Google extends React.Component {
  render() {
    return (
      <div>
        <PageLayout
          title={'Google'}
          description={"What's up with Google?"}
          pageName={this.props.pageName}
          />
      </div>
    );
  }
}

export default Google;
