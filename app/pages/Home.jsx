import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends React.Component {
  render() {
    return (
        <div className='page'>
          <h1>Informant</h1>
            <div className='page-bg-image-container'>
              <img className='page-bg-image' src={require('../assets/images/mountains.jpg')} />
            </div>
            <Link to='amazon'>
              <img className='down-arrow' src={require('../assets/images/down_arrow.svg')} />
            </Link>
        </div>
    )
  }
};

export default Home;
