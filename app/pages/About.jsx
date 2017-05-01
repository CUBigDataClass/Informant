import React from 'react';
import {Link} from 'react-router';
import AboutPageLayout from '../layout/AboutPageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <AboutPageLayout
          title={'About'}
          description={'About Us.'}
          />
        <div className='about-image-container'>
          <h1>Informant</h1>
          <h2>A social metrics dashboard.</h2>
          <p>A project based out of Boulder, CO, Informant is a tool that visualizes the general mood of the public on top companies.</p>
          <p>Fluctuations in public sentiment are realized through Informant.</p>
          <p>Informant serves a dual purpose as a stock market assistant tool and as an ongoing narrative, streaming realtime emotion into an immediate and concise visualization.</p>
        </div>

      </div>
    );
  }
}

export default About;
