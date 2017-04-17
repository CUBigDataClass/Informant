import React from 'react';
import * as d3 from 'd3';
import LinearGraph from './graphs/LinearGraph.jsx';
import WaveGraph from './graphs/WaveGraph.jsx';
import DotGraph from './graphs/DotGraph.jsx';


class GraphView extends React.Component {
  render() {
    return (
      <WaveGraph data={this.props.data} companies={this.props.companies}/>
    );
  }
}

export default GraphView;
