import React from 'react';
import GraphView from './GraphView.jsx';
var SmoothScroll = require('./SmoothScroll.js');
import introData from '../info/intro.json';

class Intro extends React.Component {
  render() {
    return (
        <div className={'Intro'}>
          <h1>{introData[0].title}</h1>
          <div className={'text-block'}>
            <div className={'description-block'}>
              <p>What is Informant?</p>
              <p>{introData[0].subtitle}</p>
            </div>
          </div>
          <SmoothScroll className={'begin-item'} section={'CompaniesGraph'} text={'Begin'}>
          </SmoothScroll>
          <div id={'CompaniesGraph'}>
          <GraphView data={this.props.data} companies={this.props.companies}/>
          </div>
        </div>
    )
  }
};

export default Intro;
