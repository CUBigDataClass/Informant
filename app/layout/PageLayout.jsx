import React from 'react';
import {Link} from 'react-router';
import GraphView from '../graphs/PieGraph.jsx';
import TextLayout from './TextLayout.jsx';
import GraphLayout from './GraphLayout.jsx';
var io = require('socket.io-client');

const emotions = ['Ecstatic','Joyous','Optimistic','Happy','Amused','Good','Indifferent','Awful','Enraged','Furious'];
const emotions2 = ['Furious','Enraged','Awful','Indifferent','Good','Amused','Happy','Optimistic','Joyous','Ecstatic'];


class PageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverTextStyle: 'hover-text off',
      data: [5, 6, 8, 1, 11, 14, 5, 6, 8, 9],
      emotionAverage: '',
      tweet: "\\(o_o)/",
      graphType: 'pie',
      emotionLabel: '',
      percentage: ''
    }
    this.hoverHandler = this.hoverHandler.bind(this);

    this.updateData = this.updateData.bind(this);
    this.changeToPie = this.changeToPie.bind(this);
    this.changeToWave = this.changeToWave.bind(this);
    this.changeToLinear = this.changeToLinear.bind(this);
    this.findEmotion = this.findEmotion.bind(this);
  }
  updateData() {
    this.setState((prevState, props) => {
          const avg = Math.random() * 2 - 1;
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 20 + 10)),
            emotionAverage: this.findEmotion(avg)
          }
        });
  }
  findEmotion(avg) {
    const l = emotions2.length;
    var emotion;
    for(var i = 0; i < l; i++) {
      if(avg > (-1 + i*0.2) && avg < (-1 + (i+1)*0.2)) {
        emotion = emotions2[i];
      }
    }
    return emotion;
  }
  hoverHandler(i) {
    this.setState((prevState,props) => {
      if(this.state.hoverTextStyle == "hover-text off") {
        return {
          hoverTextStyle: 'hover-text on',
          emotionLabel: emotions[i],
          percentage: prevState.data[i]
        }
      } else {
        return {
          hoverTextStyle: 'hover-text off'
        }
      }
    });
  }
  componentDidMount() {
    var socket = io.connect();
    var self = this;

    const num = 15;

    socket.on('amazonTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);
      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[0] = num*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData,
          emotionAverage: this.findEmotion(tweetObj.average)
          }
        });
      });

    socket.on('appleTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[1] = num*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData,
          emotionAverage: this.findEmotion(tweetObj.average)
          }
        });
      });

    socket.on('facebookTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[2] = num*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData,
          emotionAverage: this.findEmotion(tweetObj.average)
          }
        });
      });


    socket.on('googleTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[3] = num*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData,
          emotionAverage: this.findEmotion(tweetObj.average)
          }
        });
      });

    socket.on('lyftTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[4] = num*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData,
          emotionAverage: this.findEmotion(tweetObj.average)
          }
        });
      });

    socket.on('microsoftTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[5] = num*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData,
          emotionAverage: this.findEmotion(tweetObj.average)
          }
        });
      });

    socket.on('twitterTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);
      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[6] = num*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData,
          emotionAverage: this.findEmotion(tweetObj.average)
          }
        });
      });

    socket.on('uberTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[7] = num*(tweetObj.score + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData,
          emotionAverage: this.findEmotion(tweetObj.average)
          }
        });
      });
  }
  changeToPie() {
    this.setState({
      graphType: 'pie'
    });
  }
  changeToWave() {
    this.setState({
      graphType: 'wave'
    });
  }
  changeToLinear() {
    this.setState({
      graphType: 'linear'
    });
  }
  render() {

    //<div onMouseDown={this.updateData} className='update-data'>Update Data</div>
    return (
      <div className='page'>
        <TextLayout
          title={this.props.title}
          description={this.props.description}
          hoverTextStyle={this.state.hoverTextStyle}
          percentage={this.state.percentage}
          emotionLabel={this.state.emotionLabel}
          average={this.state.emotionAverage}
        />
      <div className='graph-options'>
    
      <div onMouseDown={this.changeToPie} className='update-data'>Pie Graph</div>
      <div onMouseDown={this.changeToLinear} className='update-data'>Linear Graph</div>
      <div onMouseDown={this.changeToWave} className='update-data'>Wave Graph</div>
      </div>
      <GraphLayout hoverHandler={this.hoverHandler} data={this.state.data} graphType={this.state.graphType}/>
        <div className='page-bg-image-container'>

        </div>
        <div className='down-arrow-container'>
          <Link to='amazon'>
            Amazon
          </Link>
          <Link to='apple'>
            Apple
          </Link>
          <Link to='facebook'>
            Facebook
          </Link>
          <Link to='google'>
            Google
          </Link>
          <Link to='lyft'>
            Lyft
          </Link>
          <Link to='microsoft'>
            Microsoft
          </Link>
          <Link to='twitter'>
            Twitter
          </Link>
          <Link to='Uber'>
            Uber
          </Link>
        </div>
      </div>
    );
  }
}

export default PageLayout;
