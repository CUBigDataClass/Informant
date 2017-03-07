import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';

class TextSection extends React.Component{
  render() {
    return (
      <section>
      {this.props.children}
      </section>
    );
  }
}

export default TextSection;
