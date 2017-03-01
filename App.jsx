import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import * as d3 from 'd3'
import Faux from 'react-faux-dom'

const App = React.createClass({
  mixins: [
    Faux.mixins.core,
    Faux.mixins.anim
  ],

  getInitialState () {
    return {
      chart: 'loading...'
    }
  },

  componentDidMount () {
    const faux = this.connectFauxDOM('div.renderedD3', 'chart')

    d3.select(faux)
      .append('div')
      .html('Hello World!')

    // var data = [4, 8, 15, 16, 23, 42];

    // d3.select(".renderedD3")
    // .selectAll("div")
    //   .data(data)
    // .enter().append("div")
    //   .style("width", function(d) { return d * 10 + "px"; })
    //   .text(function(d) { return d; })
    //   .style("fill", function(d) { return "red"; });

    this.animateFauxDOM(800)
  },

  render () {
    return (
      <div>
        <h2>Here is some fancy data:</h2>
        <div className='renderedD3'>
          {this.state.chart}
        </div>
        <div className="chart">
          <div style={{width: "40px"}}>4</div>
          <div style={{width: "80px"}}>8</div>
          <div style={{width: "150px"}}>15</div>
          <div style={{width: "160px"}}>16</div>
          <div style={{width: "230px"}}>23</div>
          <div style={{width: "420px"}}>42</div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('app'));
