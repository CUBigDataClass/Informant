import React, {Component} from 'react';
import MenuBar from './components/MenuBar.jsx';
import MenuBarIcon from './components/MenuBarIcon.jsx';
var io = require('socket.io-client');
var SmoothScroll = require('./components/SmoothScroll.js');
var favicon = require('./assets/images/favicon.ico');
import Companies from './companies/companies.json';

class App extends Component {
  constructor(props) {
    super(props);
    // const N = Data.length;
    // const companies = Data.map((section, i) => {
    //   return section.title;
    // });

    console.log(Companies);
    this.state = {
      companies: 'loading...',
      infos: 'loading...',
      open: false,
      MenuBarIconStyle: 'menu-bar-icon',
      data: [
        5, 6, 8, 1, 11, 14,
        5, 6
      ],
      slideContentState: 'main menu-bar-close'
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.closeMenuBar = this.closeMenuBar.bind(this);
    this.updateData = this.updateData.bind(this);
    this.slideContent = this.slideContent.bind(this);

  }
  updateData() {
    this.setState((prevState, props) => {
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 20 + 10))
          }
        });
  }
  togglePanel() {
    this.slideContent();
    this.setState((prevState, props) => {
          return {
            open : !prevState.open
          }
        });

  }
  closeMenuBar() {
    this.slideContent();
    this.setState({
      open: false
    });

  }
  slideContent() {
    this.setState((prevState, props) => {
          var newState;
          console.log(prevState.slideContentState);
          if(prevState.slideContentState == 'main menu-bar-close') {
            newState = 'main menu-bar-open';
          } else {
            newState = 'main menu-bar-close';
          }
          return {
            slideContentState : newState
          }
    });
  }
  componentWillUpdate() {
    if(this.state.open) {
      this.state.slideContentState = 'main menu-bar-open';
    } else {
      this.state.slideContentState = 'main menu-bar-close';
    }
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

      self.setState({
        infos: 'loading...'
      });
  }
  render() {
    var self = this;

    return (
      <div>
        <MenuBar names={Companies} open={this.state.open} closeMenuBar={this.closeMenuBar}/>
        <MenuBarIcon togglePanel={this.togglePanel} open={this.state.open}/>
        <div className={this.state.slideContentState}>
          {this.props.children}
        </div>
      </div>);
  }
}


export default App;
