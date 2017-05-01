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

    const emojis = this.props.emojis;

    var palette = ['#edc2c2','#D2BBA0','#F8FCDA','#edc2c2','#D5896F','#A49E8D','#7A5C58','#969A97', '#D2BBA0', '#edc2c2'];


    //Width and height
    var w = 500;
    var h = 500;

    const faux = new Faux.Element('div');

      var svg = d3.select(faux)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .classed('d3container', true);

      var r = 10;

      var rects = svg.selectAll("g")
       .data(data)
       .enter()
       .append("g")

       rects
       .append('rect')
       .classed("LinearRect", true)
       .attr("x", '250')
       .attr("y", '250')
       .attr("rx", '4')
       .attr("ry", '4')
       .attr("stroke", function(d, i) {
         return palette[i];
       })
       .attr("width", function(d, i) {
         return '4.0';
       })
      .attr("height", function(d, i) {
        return d*5;
      })
       .attr('transform', function(d, i){
         return 'translate(0, 50) rotate(' + (i*(360.0/data.length)) + ' 250 200)';
       })
       .style('stroke-width', '5px')





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



       var newRects = svg.selectAll("g")
        .data(data)
        .enter()
        .append("g");

        var self = this;





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
      .style("fill", color)
      .classed('shell', true)
      .attr("d", arc);

      var foreground = g.append("path")
      .datum({endAngle: 0.227 * tau})
      .style("fill", bgColor)
      .classed('shell', true)
      .attr('stroke', bgColor)
      .attr("d", arc);


      rects
      .append("g")
      .classed("textGroup", true)
      .attr('transform', function(d, i){
        return 'translate(' + (250 - 7.5*d.x) + ',' + (250 + 7.5*d.y) + ')';
      })
      .append('text')
      .html(function(d, i) {
        return emojis[i];
      })
      .attr('font-family', 'Futura')
      .attr('font-size', '15px')
      .attr('fill', 'white')
      .classed('companyText', true)
      .on('mouseover', function(d, i){
        return self.props.hoverHandler(i);
      })
      .on('mouseout', function(d, i){
        return self.props.hoverHandler(i);
      });






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
