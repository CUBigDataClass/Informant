import React, {Component} from 'react';
import MainContainer from './components/MainContainer.jsx';
import SectionsData from './info/companies.json';
var SmoothScroll = require('./components/SmoothScroll.js');
import MenuBar from './components/MenuBar.jsx';
import MenuBarIcon from './components/MenuBarIcon.jsx';
var io = require('socket.io-client');
import NavBar from './components/NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    const N = SectionsData.length;
    const companies = SectionsData.map((section, i) => {
      return section.title;
    });
    this.state = {
      companies: companies,
      infos: 'loading...',
      open: false,
      MenuBarIconStyle: 'MenuBarIcon',
      data: [
        5, 6, 8, 1, 11, 14,
        5, 6
      ]
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.closeMenuBar = this.closeMenuBar.bind(this);
    this.updateData = this.updateData.bind(this);

  }
  updateData() {
    this.setState((prevState, props) => {
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 20 + 10))
          }
        });
  }
  togglePanel() {
    this.setState((prevState, props) => {
          return {
            open : !prevState.open
          }
        });
  }
  closeMenuBar() {
    this.setState({
      open: false
    })
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
          tweet: tweetObj.average + " ",
          data: newData
          }
        });
      });

    socket.on('appleTweet', function (tweet) {
      var tweetObj = JSON.parse(tweet);

      self.setState((prevState, props) => {
          var newData = prevState.data;
          newData[1] = 15*(tweetObj.average + 1);
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
          newData[2] = 15*(tweetObj.average + 1);
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
          newData[3] = 15*(tweetObj.average + 1);
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
          newData[4] = 15*(tweetObj.average + 1);
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
          newData[5] = 15*(tweetObj.average + 1);
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
          newData[6] = 15*(tweetObj.average + 1);
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
          newData[7] = 15*(tweetObj.average + 1);
          return {
          tweet: tweetObj.text + " ",
          data: newData
          }
        });
      });

      self.setState({
        infos: SectionsData
      });
  }
  render() {
    var self = this;

    return (
      <div>
        <NavBar infos={this.state.infos} companies={this.state.companies} open={this.state.open}/>

      <button className={'updateButton'} onMouseDown={this.updateData}>Update Data!</button>
      <div className={'wrapper'}>

          <MenuBarIcon togglePanel={this.togglePanel} open={this.state.open}/>
          <MenuBar infos={this.state.infos} companies={this.state.companies} open={this.state.open} closeMenuBar={this.closeMenuBar}/>
          <MainContainer data={this.state.data} infos={this.state.infos} companies={this.state.companies} togglePanel={this.togglePanel} open={this.state.open}/>
      </div>
    </div>);
  }
}


export default App;
