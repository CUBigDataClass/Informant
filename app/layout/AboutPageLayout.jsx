import React from 'react';
import {Link} from 'react-router';
import TextLayout from './TextLayout.jsx';

class AboutPageLayout extends React.Component {
  render() {
    return (
      <div className='page'>
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
