import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {Chart, LineChart} from 'react-d3';

class App extends React.Component {
  render() {
    var generalChartData = require('./people2.json');

    var chartSeries = [
        {
          field: 'age',
          name: 'Age',
          color: '#ff7f0e',
          style: {
            "stroke-width": 2,
            "stroke-opacity": .2,
            "fill-opacity": .2
          }
        }
      ],
      x = function(d) {
        return d.index;
      }

    return (
      <div>
        <LineChart
           width= {600}
           height= {300}
           data= {generalChartData}
           chartSeries= {chartSeries}
           x= {x}
         />
        <Header/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
