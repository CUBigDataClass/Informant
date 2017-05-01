import React from 'react';
import {Link} from 'react-router';
import AboutPageLayout from '../layout/AboutPageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TechStack extends React.Component {
  render() {
    return (
      <div className='about'>
        <AboutPageLayout
          title={'Tech Stack'}
          description={''}
          />
        <div className='tech-stack-image-container'>
          <img className='tech-stack-image' src={require('../assets/images/tech_stack.png')}/>
        </div>

      </div>
    );
  }
}

export default TechStack;
