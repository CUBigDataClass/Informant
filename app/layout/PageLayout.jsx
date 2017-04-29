import React from 'react';
import {Link} from 'react-router';
import GraphView from '../graphs/PieGraph.jsx';
import TextLayout from './TextLayout.jsx';
import GraphLayout from './GraphLayout.jsx';
var io = require('socket.io-client');

const emotions = ['Ecstatic','Joyous','Optimistic','Happy','Amused','Good','Indifferent','Awful','Enraged','Furious'];

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverTextStyle: 'hover-text off',
      data: [5, 6, 8, 1, 11, 14, 5, 6, 8, 9],
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
  }
  updateData() {
    this.setState((prevState, props) => {
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 20 + 10))
          }
        });
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
    return (
      <div className='page'>
        <TextLayout
          title={this.props.title}
          description={this.props.description}
          hoverTextStyle={this.state.hoverTextStyle}
          percentage={this.state.percentage}
          emotionLabel={this.state.emotionLabel}
        />
      <div className='graph-options'>
      <div onMouseDown={this.updateData} className='update-data'>Update Data</div>
      <div onMouseDown={this.changeToPie} className='update-data'>Pie Graph</div>
      <div onMouseDown={this.changeToLinear} className='update-data'>Linear Graph</div>
      <div onMouseDown={this.changeToWave} className='update-data'>Wave Graph</div>
      </div>
      <GraphLayout hoverHandler={this.hoverHandler} data={this.state.data} graphType={this.state.graphType}/>
        <div className='page-bg-image-container'>
          <img className='page-bg-image' src={require('../assets/images/mountains.jpg')} />
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
