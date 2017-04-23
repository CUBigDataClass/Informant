import React from 'react';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

var color = '#583535';
var bgColor = '#dbd7d7';

var LinearGraph = React.createClass({
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

    const companies = this.props.companies;

    // const faux = this.connectFauxDOM('div.renderedD3', 'chart');
    const faux = new Faux.Element('div');

      var svg = d3.select(faux)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .classed('svgContainer', true);

      // var data2 = data.map((i) => Math.floor(Math.random() * 10 + 10))

      function X(d, i) {
        const inc = 360.0/data.length;
        const rad = Math.PI/180.0;
        const x = d*Math.sin(i * inc * rad);
        return x;
      }

      function Y(d, i) {
        const inc = 360.0/data.length;
        const rad = Math.PI/180.0;
        const y = d*Math.cos(i * inc * rad);
        return y;
      }

      data = data.map((d, i) => {
        const x = X(d, i);
        const y = Y(d, i);
        return {x,y};
      })

      // data2 = data2.map((d, i) => {
      //   const x = X(d, i);
      //   const y = Y(d, i);
      //   return {x,y};
      // })

      var rect = svg.selectAll("g")
       .data(data)
       .enter() //when u have data but no dom

       var link = d3.line()
                     .x(function(d) { return d.x*5; })
                     .y(function(d) { return d.y*5; })
                     //.curve(d3.curveCatmullRom) //curveBasis,curveCatmullRom,curveMonotoneX,curveStepAfter,curveStepBefore,curveStep
                     //curveBasisClosed,

      //first rect
      rect
      .append("line")
      .attr('transform', function(d, i){

        var deltaX = d.x - 0;
        var deltaY = d.y - 0;
        var rad = Math.atan2(deltaY, deltaX); // In radians
        var deg = rad * (180 / Math.PI)

        var xsq = Math.pow(d.x,2);
        var ysq = Math.pow(d.y,2);
        var length = 5*Math.sqrt(xsq + ysq);

        return 'translate(250, 250) ' + 'rotate('+ deg + ') scale(' + length*0.05 + ', 1)';
      })
      .attr("x1", function(d, i) {
          return 20;
      })
      .attr("y1", function(d, i) {
          return 0;
      })
      .attr("x2", function(d, i) {
          return 0;
      })
      .attr("y2", function(d, i) {
          return 0;
      })
      .attr("class", "link")
      .attr('stroke', color)
      .attr('stroke-width', '4px')
      .attr('stroke-linecap', 'round')
      .classed('Rect', true)


      rect
      .append("g")
      .classed("textGroup", true)
      .attr('transform', function(d, i){
        return 'translate(' + (250 + 7.5*d.x) + ',' + (250 + 7.5*d.y) + ')';
      })
      .append('text')
      .html(function(d, i) {
        return companies[i];
      })
      .attr('font-family', 'Futura')
      .attr('font-size', '15px')
      .attr('fill', 'white')
      .classed('companyText', true);



      svg.append('circle')
      .classed('innerCircle', true)
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', 40)
      .attr('fill', 'transparent')
      .attr('stroke', color)
      .attr('stroke-width', '3px')


      //innerCircle is after outerCircle for hover events
      svg.append('circle')
      .classed('outerCircle', true)
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', 60)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', '3px')


      svg.append('circle')
      .classed('outerCircle', true)
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', 12)
      .attr('fill', bgColor)
      .attr('stroke', color)
      .attr('stroke-width', '3px')



       var tau = 2 * Math.PI; // http://tauday.com/tau-manifesto

       var arc = d3.arc()
       .innerRadius(10)
       .outerRadius(15)
       .startAngle(0);

       var width = +svg.attr("width"),
       height = +svg.attr("height"),
       g = svg.append("g").attr('transform', function(d, i){
         return 'translate(250, 250)';
       })

       var background = g.append("path")

       .datum({endAngle: tau})
       .style("fill", color)
       .classed('shell', true)
       .attr("d", arc);


       var foreground = g.append("path")
       .datum({endAngle: 0.227 * tau})
       .style("fill", bgColor)
       .classed('shell', true)
       .attr('stroke', bgColor)
       .attr("d", arc);




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

export default LinearGraph;
