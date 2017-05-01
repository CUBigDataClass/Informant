import React from 'react';
import {Link} from 'react-router';
import PageLayout from '../layout/PageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends React.Component {
  render() {
    return (
        <div className='page'>

            <div className='page-bg-image-container'>

            </div>
            <Link to='home'>
              <h1>Informant &gt;</h1>
            </Link>
        </div>
    )
  }
};

export default Home;
