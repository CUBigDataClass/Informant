import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import TextSectionContainer from './TextSectionContainer.jsx';
import GraphView from './GraphView.jsx'

class InfoStory extends React.Component{
  render(){
    return (
      <div>
      <GraphView data={this.props.data} updateData={this.props.updateData}/>
      <TextSectionContainer/>
      </div>
    );
  }
}

export default InfoStory;
