import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import InfoStory from './InfoStory.jsx';

const App = React.createClass({
  mixins: [
    Faux.mixins.core,
    Faux.mixins.anim
  ],

  getInitialState () {
    return {
      data: [14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2]
    }
  },
  updateData() {

    this.state.data = [0, 1, 15, 16, 23, 42, 5, 16, 11, 57, 0, 2];
    this.forceUpdate();
  },

  render () {
    return (
      <div>
        <h2>Informant</h2>
        <InfoStory data={this.state.data} updateData={this.state.updateData}/>
      </div>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('app'));
