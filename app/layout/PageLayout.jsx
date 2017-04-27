import React from 'react';
import {Link} from 'react-router';
import GraphView from '../graphs/PieGraph.jsx';
import TextLayout from './TextLayout.jsx';
import GraphLayout from './GraphLayout.jsx';

class PageLayout extends React.Component {
  render() {
    return (
      <div className='page'>
        <TextLayout
          title={this.props.title}
          description={this.props.description}
        />
        <GraphLayout/>
        <div className='page-bg-image-container'>
          <img className='page-bg-image' src={require('../assets/images/mountains.jpg')} />
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

export default PageLayout;
