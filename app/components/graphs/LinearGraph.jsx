import React from 'react';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

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
            .attr("height", h);

      var r = 10;

      var lines = svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")


       lines
       .attr("x", '250')
       .attr("y", '250')
       .attr("width", function(d, i) {
         return '0.1';
       })
      .attr("height", function(d, i) {
        return d*5;
      })
       .attr('transform', function(d, i){
         return 'rotate(' + i*30 + ' 250 250)';
       })
       .style('stroke','#ffffff')
       .style('stroke-width', '1px')

       svg.append('circle')
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 100)
       .attr('fill', '#1c1c1c')
       .attr('stroke', '#d0d0d6')
       .attr('stroke-width', '2px')

       svg.append('circle')
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 110)
       .attr('fill', 'none')
       .attr('stroke', '#d0d0d6')
       .attr('stroke-width', '2px')

       //  .attr("y2", function(d, i) {
       //    return '' + (350 + d) + '';
       //  })


//  var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
//                   { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
//                   { "x": 80,  "y": 5},  { "x": 100, "y": 60}];
//
//  var lineFunction = d3.svg.line()
//                           .x(function(d) { return d.x; })
//                           .y(function(d) { return d.y; })
//                          .interpolate("linear");
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
        <div className='renderedD3'>
          {this.state.chart}
        </div>
      </div>
    );
  }
})

export default LinearGraph;
