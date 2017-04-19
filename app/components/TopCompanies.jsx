import React from 'react';
import GraphView from './GraphView.jsx';
var SmoothScroll = require('./SmoothScroll.js');

var Company = React.createClass({
  render() {
    return (
        <div id={'TopCompanies'} className={'Company'}>

          <div className={'images'}>
          <div className={'logo'}></div>
          <div className={'background_image'}>
            <div className={'foreground_image'}>
              <h1>Informant</h1>

              <p>What is Informant?</p>
            </div>
          </div>
          <SmoothScroll className={'StartContainer'} section={'Apple'}>
            <div className={'Start'}>
                <p>Begin your journey</p>
            </div>
          </SmoothScroll>
          </div>
          <GraphView data={this.props.data} companies={this.props.companies}/>
        </div>
    )
  }
});

module.exports = Company;
