import React from 'react';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

var whiteColor = '#583535';
var blackColor = '#1c1c1c';
var grayColor = '#232f2e';
var kernelColor = '#f7f5f5';
var coreColor = '#908d9c';

var WaveGraph = React.createClass({
  mixins: [
    Faux.mixins.core,
    Faux.mixins.anim
  ],
  getInitialState: function() {
    return {
      chart: 'loading ....'
    }
  },
  updateGraph: function(data) {

    //Width and height
    var w = 500;
    var h = 500;

    // const faux = this.connectFauxDOM('div.renderedD3', 'chart');
    const faux = new Faux.Element('div');

      var svg = d3.select(faux)
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      var data2 = data.map((i) => Math.floor(Math.random() * 10 + 10))

      data = data.map((d, i) => {
        const inc = 12;
        const rad = Math.PI/180.0;
        const x = d*Math.sin(i * inc * rad);
        const y = d*Math.cos(i * inc * rad);
        return {x,y};
      })

      data2 = data2.map((d, i) => {
        const inc = 12;
        const rad = Math.PI/180.0;
        const x = d*Math.sin(i * inc * rad);
        const y = d*Math.cos(i * inc * rad);
        return {x,y};
      })

      var wave = svg.selectAll("g")
       .data(data)
       .enter() //when u have data but no dom

       wave
       .append('circle')
       .classed("dots", true)
       .attr('transform', function(d, i){
         return 'translate(250, 250)';
       })
       .attr('cx', function(d, i) {
         return 5*d.x;
       })
       .attr('cy', function(d, i) {
         return 5*d.y;
       })
       .attr('r', 5)
       .attr('fill', function(d, i) {
         const hex = (i*6).toString(16);
         return '#' + hex + hex + hex;
       })
       .attr('stroke', 'black')
       .attr('stroke-width', '0px')
       .attr('opacity', '0')


       var link = d3.line()
                     .x(function(d) { return d.x*5; })
                     .y(function(d) { return d.y*5; })
                     .curve(d3.curveBasisClosed) //curveBasis,curveCatmullRom,curveMonotoneX,curveStepAfter,curveStepBefore,curveStep
                     //curveBasisClosed,

      //one connection
      svg
      .append("path")
      .attr('transform', function(d, i){
        return 'translate(250, 250)';
      })
      .attr("d", function(d, i) {
          return link(data);
      })
      .attr("class", "link")
      .attr('stroke', coreColor)
      .attr('fill', 'none')
      .attr('stroke-width', '1px')

      svg
      .append("path")
      .attr('transform', function(d, i){
        return 'translate(250, 250)';
      })
      .attr("d", function(d, i) {
          return link(data2);
      })
      .attr("class", "link")
      .attr('stroke', coreColor)
      .attr('fill', 'none')
      .attr('stroke-width', '1px')

      svg.append('circle')
      .classed('innerCircle', true)
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', 40)
      .attr('fill', 'transparent')
      .attr('stroke', coreColor)
      .attr('stroke-width', '3px')

      //innerCircle is after outerCircle for hover events
      svg.append('circle')
      .classed('outerCircle', true)
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', 60)
      .attr('fill', 'none')
      .attr('stroke', coreColor)
      .attr('stroke-width', '3px')



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
       .datum({endAngle: 0.027 * tau})
       .style("fill", kernelColor)
       .classed('shell', true)
       .attr('stroke', kernelColor)
       .attr("d", arc);

      // this.animateFauxDOM(0)
      const finalChart = faux.toReact();
      this.setState({
        chart: finalChart
      })
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

export default WaveGraph;
