import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import InfoStory from './InfoStory.jsx';

var App = React.createClass({
  getInitialState() {
    return {
      data: [14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2]
    }
  },
  updateData() {
    this.setState({
            data: [1, 1, 1, 1, 2, 4, 1, 1, 1, 5, 5, 2]
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
    return (
      <div>
        <h2>Informant</h2>

        <img src={'./informant_1.svg'} alt={'informant'}/>
        <InfoStory data={this.state.data}/>
        <button onClick={this.updateData}>Update Data</button>
        <button onClick={this.decrementData}>-</button>
        <button onClick={this.incrementData}>+</button>
        <div className='renderedD3'>
          {this.state.chart}
        </div>
      </div>
    )
  }
});

module.exports = App;
