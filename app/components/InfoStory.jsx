import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import LeftPanel from './layout/LeftPanel.jsx';
import GraphView from './GraphView.jsx'

class InfoStory extends React.Component{
  render(){
    return (
      <div>
      <LeftPanel/>
      <GraphView data={this.props.data}/>
      </div>
    );
  }
}

export default InfoStory;
