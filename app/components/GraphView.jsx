import React from 'react';
import * as d3 from 'd3';
import LinearGraph from './graphs/LinearGraph.jsx';

class GraphView extends React.Component {
  render() {
    return (
      <LinearGraph data={this.props.data}/>
    );
  }
}

export default GraphView;
