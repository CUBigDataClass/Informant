import React from 'react';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

var whiteColor = '#583535';
var blackColor = '#1c1c1c';
var grayColor = '#232f2e';
var kernelColor = '#f7f5f5';
var coreColor = '#0f1f24';



var LinearGraph = React.createClass({
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
    function arcTween(newAngle) {
      return function(d) {
        var interpolate = d3.interpolate(d.endAngle, newAngle);
        return function(t) {
          d.endAngle = interpolate(t);
          return arc(d);
        };
      };
    };
    //Width and height
    var w = 500;
    var h = 500;
    const faux = this.connectFauxDOM('div.renderedD3', 'chart')

    // var chart = d3.select(Faux.createElement('svg'))
    //       .attr('width', w)
    //       .attr('height', h)
    //       .attr("fill", "yellow")

    // var svg = d3.select("faux")
		// 				.append("svg")
		// 				.attr("width", w)
		// 				.attr("height", h);
    //
    //
    // var circles = svg.selectAll("circle")
		// 	    .data(data)
		// 	    .enter()
		// 	    .append("circle");
    //
    // circles.attr("r", function(d) {
		// 				return d;
		// 		   })
		// 		   .attr("stroke", "black")
		// 		   .attr("stroke-width", function(d) {
		// 				return d/2;
		// 		   });

      // d3.select(faux)
      // .selectAll("div")
      //   .data(data)
      // .enter().append("div")
      //   .style("width", function(d) { return d * 10 + "px"; })
      //   .text(function(d) { return d; })

      var svg = d3.select(faux)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .classed('d3container', true);

      var r = 10;

      var rectGroups = svg.selectAll("g")
       .data(data)
       .enter()
       .append("g")

       rectGroups
       .append('rect')
       .classed("LinearRect", true)
       .attr("x", '250')
       .attr("y", '250')
       .attr("rx", '4')
       .attr("ry", '4')
       .attr('fill', function(d, i) {
         const hex = (i*6).toString(16);
         return '#' + hex + hex + hex;
       })
       .attr("width", function(d, i) {
         return '4.0';
       })
      .attr("height", function(d, i) {
        return d*5;
      })
       .attr('transform', function(d, i){
         return 'translate(0, 50) rotate(' + i*6 + ' 250 200)';
       })
       .style('stroke',whiteColor)
       .style('stroke-width', '0px')

      // .attr('cx', function(d, i) {
      //   return (5*d*Math.cos(30));
      // })
      //  .attr('cy', function(d, i) {
      //    return (5*d*Math.sin(30));
      //  })

       rectGroups
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
       .attr('stroke', whiteColor)
       .attr('stroke-width', '0px')

    //    var line = d3.svg.line()
    // .interpolate(function(points) { return points.join("A 1,1 0 0 1 "); }) // custom interpolator
    // .x(function(d) { return x(d.x); })
    // .y(function(d) { return y(d.y); });
    //
    //    rectGroups.append("path")
    //    .attr("class", "line")
    //    .attr("d", line);




       svg.append('circle')
       .classed('outercircles', true)
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 50)
       .attr('fill', 'none')
       .attr('stroke', kernelColor)
       .attr('stroke-width', '5.5px')

       svg.append('circle')
       .classed('outercircles', true)
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 70)
       .attr('fill', 'none')
       .attr('stroke', kernelColor)
       .attr('stroke-width', '5.5px')

       svg.append('circle')
       .classed("kernel", true)
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 39)
       .attr('fill', '#f7f5f5')
       .attr('stroke', whiteColor)
       .attr('stroke-width', '0px')

       svg.append('circle')
       .classed("core", true)
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 39)
       .attr('fill', 'none')
       .attr('stroke', whiteColor)
       .attr('stroke-width', '5px')

      //  .classed("CorePath", true)

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


      // d3.interval(function() {
      //   foreground.transition()
      //       .duration(1000)
      //       .attrTween("d", arcTween(Math.random() * tau));
      // }, 2000);



      // svg.append('g')
      // .attr('transform', 'translate(235, 240)')
      // .append('path')
      // .attr('d', 'M 50,5 95,97.5 5,97.5 Z')
      // .attr('transform-origin', 'center')
      // .attr('transform', 'scale(0.4) rotate(45, 0, 0)')
      // .attr('fill', '#1c1c1c')



 //
 // var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
 //                  { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
 //                  { "x": 80,  "y": 5},  { "x": 100, "y": 60}];
//
 // var lineFunction = d3.svg.line()
 //                          .x(function(d) { return d.x; })
 //                          .y(function(d) { return d.y; })
 //                         .interpolate("linear");
//
// //The line SVG Path we draw
// var lineGraph = svg.append("path")
//                             .attr("d", lineFunction(lineData))
//                             .attr("stroke", "blue")
//                             .attr("stroke-width", 2)
//                             .attr("fill", "none");

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

export default LinearGraph;
