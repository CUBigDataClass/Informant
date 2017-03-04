import React from 'react';
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
    //
    // d3.select(faux)
    //   .append('div')
    //   .html('Hello World!')

    var data = [14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2];

    d3.select(faux)
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", function(d) { return d * 20 + "px"; })
      .text(function(d) { return d; })




    // var data = [4, 8, 15, 16, 23, 42];

    // var x = d3.scale.linear().domain([0, d3.max(data)])
    //     .range([0, 420]);
    //
    // d3.select(".chart")
    //   .selectAll("div")
    //     .data(data)
    //   .enter().append("div")
    //     .style("width", function(d) { return x(d) + "px"; })
    //     .text(function(d) { return d; });

    this.animateFauxDOM(800)
  },

  render () {
    return (
      <div>
        <h2>Informant</h2>
        <div className='renderedD3'>
          {this.state.chart}
        </div>
      </div>
    )
  }
})

module.exports = App;
