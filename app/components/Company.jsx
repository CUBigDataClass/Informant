import React, {Component} from 'react';
import GraphView from './GraphView.jsx';
var SmoothScroll = require('./SmoothScroll.js');

class Company extends Component {
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
          <div className={'section-title'}>
              <h1>{this.props.title}</h1>
              <p>{this.props.text}</p>
          </div>
          <SmoothScroll section={this.props.title}>
            <div>
              <p>😊</p>
            </div>
          </SmoothScroll>
          </div>
          <GraphView data={this.props.data} companies={this.props.companies}/>
        </div>
    )
  }
};

export default Company;
