import React, {Component} from 'react';
import * as d3 from 'd3';
import LinearGraph from '../graphs/LinearGraph.jsx';
import WaveGraph from '../graphs/WaveGraph.jsx';
import DotGraph from '../graphs/DotGraph.jsx';
import PieGraph from '../graphs/PieGraph.jsx';
import Companies from '../info/companies.json';
var io = require('socket.io-client');

const emotions2 = ['Furious','Enraged','Awful','Indifferent','Good','Amused','Happy','Optimistic','Joyous','Ecstatic'];

class HomeGraphLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [5, 6, 8, 1, 11, 14, 5, 6],
      averages: [0, 0, 0, 0, 0, 0, 0, 0],
      tweet: "loading...",
      graphType: 'pie',
      tweetCount: 0,
      average: ''
    }

    this.updateData = this.updateData.bind(this);
    this.calculateAvg = this.calculateAvg.bind(this);
    this.findEmotion = this.findEmotion.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  updateData() {
    this.setState((prevState, props) => {
          const avg = Math.random() * 2 - 1;
          const new_avg = this.findEmotion(avg);
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 20 + 10)),
            average: new_avg
          }
        });
  }
  findEmotion(avg) {
    const l = emotions2.length;
    var emotion;
    for(var i = 0; i < l; i++) {
      if(avg > (-1 + i*0.2) && avg <= (-1 + (i+1)*0.2)) {
        emotion = emotions2[i];
      }
    }
    return emotion;
  }
  componentDidMount() {
    var socket = io.connect();
    var self = this;
    socket.on('amazonTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[0] = 15*(tweetObj.score + 1);
          var newAverages = prevState.averages;
          newAverages[0] = tweetObj.average;

          return {
          tweet: tweetObj.text + " ",
          data: newData,
          average: self.findEmotion(self.calculateAvg(newAverages))
          }
        });
      });

    socket.on('appleTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[1] = 15*(tweetObj.score + 1);
          var newAverages = prevState.averages;
          newAverages[0] = tweetObj.average;

          return {
          tweet: tweetObj.text + " ",
          data: newData,
          average: self.findEmotion(self.calculateAvg(newAverages))
          }
        });
      });

    socket.on('facebookTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[2] = 15*(tweetObj.score + 1);
          var newAverages = prevState.averages;
          newAverages[1] = tweetObj.average;

          return {
          tweet: tweetObj.text + " ",
          data: newData,
          average: self.findEmotion(self.calculateAvg(newAverages))
          }
        });
      });


    socket.on('googleTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[3] = 15*(tweetObj.score + 1);
          var newAverages = prevState.averages;
          newAverages[2] = tweetObj.average;

          return {
          tweet: tweetObj.text + " ",
          data: newData,
          average: self.findEmotion(self.calculateAvg(newAverages))
          }
        });
      });

    socket.on('lyftTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[4] = 15*(tweetObj.score + 1);
          var newAverages = prevState.averages;
          newAverages[3] = tweetObj.average;

          return {
          tweet: tweetObj.text + " ",
          data: newData,
          average: self.findEmotion(self.calculateAvg(newAverages))
          }
        });
      });

    socket.on('microsoftTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[5] = 15*(tweetObj.score + 1);
          var newAverages = prevState.averages;
          newAverages[4] = tweetObj.average;

          return {
          tweet: tweetObj.text + " ",
          data: newData,
          average: self.findEmotion(self.calculateAvg(newAverages))
          }
        });
      });

    socket.on('twitterTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);
      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[6] = 15*(tweetObj.score + 1);
          var newAverages = prevState.averages;
          newAverages[5] = tweetObj.average;

          return {
          tweet: tweetObj.text + " ",
          data: newData,
          average: self.findEmotion(self.calculateAvg(newAverages))
          }
        });
      });

    socket.on('uberTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[7] = 15*(tweetObj.score + 1);
          var newAverages = prevState.averages;
          newAverages[6] = tweetObj.average;


          return {
          tweet: tweetObj.text + " ",
          data: newData,
          average: self.findEmotion(self.calculateAvg(newAverages))
          }
        });
      });
  }
  calculateAvg(averages) {
    var average = 0;
    for(var i = 0; i < Companies.length; i++) {
      average += averages[i];
    }
    return average;
  }
  render() {
    const companies = Companies.map((section, i) => {
      return section.title;
    });

    var graph;
    if(this.state.graphType == "linear") {
      graph = (<LinearGraph
        data={this.state.data}
        emojis={companies}
      />);
    } else if(this.state.graphType == "wave") {
      graph = (<WaveGraph
        data={this.state.data}
        emojis={companies}
      />);
    } else if(this.state.graphType == "pie") {
      graph = (<PieGraph
        data={this.state.data}
        emojis={companies}
      />);
    }

    //<div onMouseDown={this.updateData} className='update-data'>Update Data</div>

    return (
      <div className='home-graph-layout'>
        <div className='average-emotion'>
          <div className='home-graph-options'>

          </div>
          <p>{this.state.average}</p>
        </div>
        <div className='current-tweet-container'>
        <h1 className='current-tweet'>
          {this.state.tweet}
        </h1>
        </div>
          {graph}

      </div>
    );
  }
}

export default HomeGraphLayout;
