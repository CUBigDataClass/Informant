import React, {Component} from 'react';
import * as d3 from 'd3';
import LinearGraph from '../graphs/LinearGraph.jsx';
import WaveGraph from '../graphs/WaveGraph.jsx';
import DotGraph from '../graphs/DotGraph.jsx';
import PieGraph from '../graphs/PieGraph.jsx';
import Emojis from '../info/emojis.json';

class GraphLayout extends Component {
  render() {
    const emojis = Emojis.map((section, i) => {
      return section.title;
    });

    var graph;

    if(this.props.graphType == "linear") {
        graph = (<LinearGraph
          data={this.props.data}
          emojis={emojis}
          hoverHandler={this.props.hoverHandler}
        />);
    } else if(this.props.graphType == "wave") {
      graph = (<WaveGraph
        data={this.props.data}
        emojis={emojis}
        hoverHandler={this.props.hoverHandler}
      />);
    } else if(this.props.graphType == "pie") {
      graph = (<PieGraph
        data={this.props.data}
        emojis={emojis}
        hoverHandler={this.props.hoverHandler}
      />);
    }

    return (
      <div className='graph-layout'>
        <div>
          <h1>
            {this.props.tweet}
          </h1>
        </div>
          {graph}
      </div>
    );
  }
}

export default GraphLayout;
