import React from 'react';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

var GraphView = React.createClass({
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
    const faux = this.connectFauxDOM('div.renderedD3', 'chart')
      d3.select(faux)
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return d * 10 + "px"; })
        .text(function(d) { return d; })

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

export default GraphView;
