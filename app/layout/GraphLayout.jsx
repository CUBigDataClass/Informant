import React, {Component} from 'react';
import * as d3 from 'd3';
import LinearGraph from '../graphs/LinearGraph.jsx';
import WaveGraph from '../graphs/WaveGraph.jsx';
import DotGraph from '../graphs/DotGraph.jsx';
import PieGraph from '../graphs/PieGraph.jsx';
import Companies from '../companies/emojis.json';
var io = require('socket.io-client');

class GraphLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [5, 6, 8, 1, 11, 14, 5, 6],
      tweet: "loading..."
    }

    this.updateData = this.updateData.bind(this);
  }
  updateData() {
    this.setState((prevState, props) => {
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 20 + 10))
          }
        });
  }
  componentDidMount() {
    var socket = io.connect();
    var self = this;
    socket.on('amazonTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);
      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[0] = 15*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });

    socket.on('appleTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[1] = 15*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });

    socket.on('facebookTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[2] = 15*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });


    socket.on('googleTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[3] = 15*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });

    socket.on('lyftTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[4] = 15*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });

    socket.on('microsoftTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[5] = 15*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });

    socket.on('twitterTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);
      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[6] = 15*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });

    socket.on('uberTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[7] = 15*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });
  }
  render() {
    console.log('graph view');
    console.log(Companies);
    const companies = Companies.map((section, i) => {
      return section.title;
    });

    return (
      <div className='graph-layout'>
        <div><h1>{this.state.tweet}</h1></div>
        <div onMouseDown={this.updateData} className='update-data'>Update Data</div>
        <WaveGraph
          data={this.state.data}
          companies={companies}
        />
      </div>
    );
  }
}

export default GraphLayout;
