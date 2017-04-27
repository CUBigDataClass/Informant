import React from 'react';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

var color = '#583535';
var bgColor = '#dbd7d7';

var PieGraph = React.createClass({
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

      var palette = ['#9F7E69','#D2BBA0','#F8FCDA','#9F7E69','#D5896F','#A49E8D','#7A5C58','#969A97'];

      var wave = svg.selectAll("g")
       .data(data)
       .enter() //when u have data but no dom


      //innerCircle is after outerCircle for hover events
      svg.append('circle')
      .classed('outerCircle', true)
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', 60)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', '3px')


       var start = 0;
       var middle = 1.07 * Math.PI;
       var end = 3.14 * Math.PI;

      //  var arc = d3.arc()
      //  .innerRadius(10)
      //  .outerRadius(15)
      //  .startAngle(0);

      var makeArc = d3.arc()
      .startAngle(function(d) {
        var deltaX = d.x - 0;
        var deltaY = d.y - 0;
        var rad = Math.atan2(deltaY, deltaX); // In radians
        var deg = rad * (180 / Math.PI);
        return rad + 1.0;
      })
      .endAngle(function(d) {
        var deltaX = d.x - 0;
        var deltaY = d.y - 0;
        var rad = Math.atan2(deltaY, deltaX); // In radians
        var deg = rad * (180 / Math.PI);
        return rad + 1.57 //one radian;
      })
      .innerRadius(function(d) {
        return 10;
      })
      .outerRadius(function(d) {
        var xsq = Math.pow(d.x,2);
        var ysq = Math.pow(d.y,2);
        var length = 5*Math.sqrt(xsq + ysq);
        return length;
      }
      );

       var width = +svg.attr("width"),
       height = +svg.attr("height"),
       g = svg.append("g").attr('transform', function(d, i){
         return 'translate(250, 250)';
       })

       wave
       .append("g").attr('transform', function(d, i){
         return 'translate(250, 250)';
       })
       .append("path")
       .attr("d", function(d,i) {
         return makeArc(d);
       })
       .style("fill", function(d, i) {
          return palette[i];
       })
       .classed('shell', true)


       wave
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

export default PieGraph;
