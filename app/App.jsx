import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import InfoStory from './components/InfoStory.jsx';
import LeftPanel from './components/layout/LeftPanel.jsx';
import RightPanel from './components/layout/RightPanel.jsx';
// import TweepyText from './components/layout/TweepyText.jsx';

var App = React.createClass({
  getInitialState() {
    return {
      data: [14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2]
    }
  },
  updateData() {

    this.setState((prevState, props) => {
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 55))
          }
        });
  },
  incrementData() {
    this.setState((prevState, props) => {
            return {
            data: prevState.data.map((i) => i + 1)
          }
        });
  },
  decrementData() {
    this.setState((prevState, props) => {
            return {
            data: prevState.data.map((i) => i - 1)
          }
        });
  },
  render() {
    var str = <li>Hello.</li>;
    return (
      <div>
        <Header/>
        <LeftPanel/>
        <InfoStory data={this.state.data}/>
        <div className={'controlPanel'}>
          <button onClick={this.updateData}>Update Data</button>
          <button onClick={this.decrementData}>-</button>
          <button onClick={this.incrementData}>+</button>
        </div>
        <div className='renderedD3'>
        {this.state.chart}
        </div>
        <RightPanel/>
        <Footer/>
      </div>
    )
  }
});

module.exports = App;
