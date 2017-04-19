import React from 'react';
import GraphView from './GraphView.jsx';
var SmoothScroll = require('./SmoothScroll.js');

var Company = React.createClass({
  render() {

    var index = 0;
    if(this.props.index + 1 == null) {
      index = this.props.index;
    } else {
      index = this.props.index + 1;
    }

    return (
        <div id={this.props.title} className={'Company'}>

          <div className={'images'}>
          <div className={'logo'}></div>
          <div className={'background_image'}>
            <div className={'foreground_image'}>
              <h1>{this.props.title}</h1>

              <p>{this.props.text}</p>
            </div>
          </div>
          <SmoothScroll className={'StartContainer'} section={this.props.title}>
            <div className={'Start'}>
              <p>😊</p>
            </div>
          </SmoothScroll>
          </div>
          <GraphView data={this.props.data} companies={this.props.companies}/>
        </div>
    )
  }
});

module.exports = Company;
