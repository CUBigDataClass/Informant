import React from 'react';
import {Link} from 'react-router';
import TextLayout from './TextLayout.jsx';
var io = require('socket.io-client');
import Emojis from '../info/emojis.json';

const emotions = ['Ecstatic','Joyous','Optimistic','Happy','Amused','Good','Indifferent','Awful','Enraged','Furious'];

class AboutPageLayout extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='about-title'>
          <h1>{this.props.title}</h1>
          <h3>{this.props.description}</h3>
        </div>
        <div className='page-bg-image-container'>

        </div>
        <div className='down-arrow-container'>
          <Link to='amazon'>
            Amazon
          </Link>
          <Link to='apple'>
            Apple
          </Link>
          <Link to='facebook'>
            Facebook
          </Link>
          <Link to='google'>
            Google
          </Link>
          <Link to='lyft'>
            Lyft
          </Link>
          <Link to='microsoft'>
            Microsoft
          </Link>
          <Link to='twitter'>
            Twitter
          </Link>
          <Link to='Uber'>
            Uber
          </Link>
        </div>
      </div>
    );
  }
}

export default AboutPageLayout;
