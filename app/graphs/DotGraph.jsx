import React from 'react';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

var whiteColor = '#583535';
var blackColor = '#1c1c1c';
var grayColor = '#232f2e';
var kernelColor = '#f7f5f5';
var coreColor = '#0f1f24';

var DotGraph = React.createClass({
  mixins: [
    Faux.mixins.core,
    Faux.mixins.anim
  ],
  getInitialState() {
    return {
      chart: 'loading ....'
    }
  },
  updateGraph(data) {

    //Width and height
    var w = 500;
    var h = 500;
    const faux = this.connectFauxDOM('div.renderedD3', 'chart')

      var svg = d3.select(faux)
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      var wave = svg.selectAll("g")
       .data(data)
       .enter() //when u have data but no dom
       .append("g");

       wave
       .append('circle')
       .classed("dots", true)
       .attr('transform', function(d, i){
         return 'translate(300, 250) rotate(' + (i*6 + 90) + ' -50 0)';
       })
       .attr('cx', function(d, i) {
         return 5*d;
       })
       .attr('r', 5)
       .attr('fill', function(d, i) {
         const hex = (i*6).toString(16);
         return '#' + hex + hex + hex;
       })
       .attr('stroke', 'black')
       .attr('stroke-width', '0px')

       var tau = 2 * Math.PI; // http://tauday.com/tau-manifesto

       var arc = d3.arc()
       .innerRadius(10)
       .outerRadius(15)
       .startAngle(0);

       var width = +svg.attr("width"),
       height = +svg.attr("height"),
       g = svg.append("g").attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");


       var background = g.append("path")

       .datum({endAngle: tau})
       .style("fill", coreColor)
       .classed('shell', true)
       .attr("d", arc);

       var foreground = g.append("path")
       .datum({endAngle: 0.127 * tau})
       .style("fill", kernelColor)
       .classed('shell', true)
       .attr('stroke', kernelColor)
       .attr("d", arc);

      this.animateFauxDOM(0)
  },
  componentDidMount(){
    this.updateGraph(this.props.data)
  },
  componentWillReceiveProps(newProps) {
    this.updateGraph(newProps.data)
  },
  render(){
    return (
      <div>
        <div className='graph'>
          {this.state.chart}
        </div>
      </div>
    );
  }
})

export default DotGraph;
