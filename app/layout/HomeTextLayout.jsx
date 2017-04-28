import React from 'react';
import {Link} from 'react-router';

class HomeTextLayout extends React.Component {
  render() {
    return (
      <div className={'text-layout'}>
        <div className={'header'}>
          <div className={'header-box'}>
            <div className={'title'}>
              <h1>{this.props.title}</h1>
            </div>
            <div className={'subtitle'}>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTextLayout;
