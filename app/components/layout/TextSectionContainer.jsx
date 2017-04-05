import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import TextSection from './TextSection.jsx';

class TextSectionContainer extends React.Component{
  render() {
    var count = 4;
    var sections = [];
    for(var i = 0; i < count; i++) {
      sections.push(<TextSection key={i}>section {i}</TextSection>);
    }
    return (
      <div>
      {sections}
      </div>
    );
  }
}

export default TextSectionContainer;
