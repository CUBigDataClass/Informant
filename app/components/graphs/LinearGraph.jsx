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

      var rects = svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")


       rects
       .attr("x", '250')
       .attr("y", '250')
       .attr("rx", '4')
       .attr("ry", '4')
       .attr('fill', '#FFFFFF')
       .attr("width", function(d, i) {
         return '5.8';
       })
      .attr("height", function(d, i) {
        return d*5;
      })
       .attr('transform', function(d, i){
         return 'rotate(' + i*6 + ' 250 250)';
       })
       .style('stroke','#ffffff')
       .style('stroke-width', '0.5px')

       svg.append('circle')
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 54)
       .attr('fill', '#1c1c1c')
       .attr('stroke', '#ffffff')
       .attr('stroke-width', '1px')

       svg.append('circle')
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 49)
       .attr('fill', 'none')
       .attr('stroke', '#ffffff')
       .attr('stroke-width', '1px')

       svg.append('circle')
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 39)
       .attr('fill', 'none')
       .attr('stroke', '#ffffff')
       .attr('stroke-width', '5px')

       svg.append('circle')
       .attr('cx', '50%')
       .attr('cy', '50%')
       .attr('r', 30)
       .attr('fill', 'none')
       .attr('stroke', '#ffffff')
       .attr('stroke-width', '5px')



//        // define the clipPath
// svg.append("clipPath")       // define a clip path
//     .attr("id", "circle-clip") // give the clipPath an ID
//   .append("circle")          // shape it as an ellipse
//     .attr("cx", 250)         // position the x-centre
//     .attr("cy", 250)         // position the y-centre
//     .attr("r", 70)         // set the x radius
//
//
// // draw clipped path on the screen
// svg.append("circle")        // attach a rectangle
//     .attr("x", 125)        // position the left of the rectangle
//     .attr("y", 75)         // position the top of the rectangle
//     .attr("r", 400)         // set the x radius
//     .attr("clip-path", "url(#circle-clip)") // clip the rectangle
//     .style("fill", "lightgrey")   // fill the clipped path with grey


    // svg.append('circle')
    // .attr('cx', '50%')
    // .attr('cy', '50%')
    // .attr("clip-path", "url(#ellipse-clip)") // clip the rectangle
    // .attr('r', 50)
    // .attr('fill', '#111111')
    // .attr('stroke', '#d0d0d6')
    // .attr('stroke-width', '0.5px')
    //
    svg.append('g')
    .attr('transform', 'translate(235, 240)')
    .append('path')
    .attr('d', 'M 50,5 95,97.5 5,97.5 Z')
    .attr('transform-origin', 'center')
    .attr('transform', 'scale(0.4) rotate(45, 0, 0)')
    .attr('fill', '#1c1c1c')


     svg.append('circle')
     .attr('cx', '50%')
     .attr('cy', '50%')
     .attr('r', 30)
     .attr('fill', 'none')
     .attr('stroke', '#ffffff')
     .attr('stroke-width', '1px')


      svg.append('circle')
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', 39)
      .attr('fill', 'none')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', '1px')







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
