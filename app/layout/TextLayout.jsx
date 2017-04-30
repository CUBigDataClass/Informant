import React from 'react';
import {Link} from 'react-router';

class TextLayout extends React.Component {
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
              <h1>
                Average Sentiment:
              </h1>
              <h1 className='average-emotion'>
                {this.props.average}
              </h1>
              <div className='hover-text-container'>
                <p className={this.props.hoverTextStyle}>
                  {this.props.emotionLabel}: {this.props.percentage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TextLayout;
