import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import InfoStory from './components/InfoStory.jsx';
import RightPanel from './components/layout/RightPanel.jsx';
import LeftPanel from './components/layout/LeftPanel.jsx';
// import TweepyText from './components/layout/TweepyText.jsx';
var io = require('socket.io-client');
//import Fonts from './assets/styles/global.css';
import MainContainer from './components/MainContainer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        14, 18, 15, 16, 23,
        42, 5, 16, 11, 57,
        55, 2, 14, 18, 15,
        16, 23, 42, 5, 16,
        11, 57, 55, 2, 14,
        18, 15, 16, 23, 42],
      tweet: 'Not streaming right now...',
      open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
    this.updateData = this.updateData.bind(this);
    this.incrementData = this.incrementData.bind(this);
    this.decrementData = this.decrementData.bind(this);
  }
  togglePanel() {
    this.setState((prevState, props) => {
          return {
            open : !prevState.open
          }
        });
  }
  updateData() {
    this.setState((prevState, props) => {
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 10 + 10))
          }
        });
  }
  incrementData() {
    this.setState((prevState, props) => {
            return {
            data: prevState.data.map((i) => i + 10)
          }
        });
  }
  decrementData() {
    this.setState((prevState, props) => {
            return {
            data: prevState.data.map((i) => i - 10)
          }
        });
  }
  componentDidMount() {
    var self = this;
        // Initialize socket.io
        var socket = io.connect();

        // On tweet event emission...
        socket.on('tweet', function (tweetData) {

       self.setState((prevState, props) => {
               return {
               tweet: tweetData.text + " " + tweetData.user.followers_count * 0.0015 + 20,
               data: prevState.data.map((i) => Math.floor(Math.random() * tweetData.user.followers_count * 0.0015 + 20))
             }
        });

     });
  }
  render() {
    var mainContainer = 'MainContainer';
    if(this.state.open) {
      mainContainer += ' menuBarOpen'
    } else {
      mainContainer += ' menuBarClose'
    }

    var str = <li>Hello.</li>;
    return (
      <div className={'App'}>
        <LeftPanel/>
        <div className={mainContainer}>
          <Header/>
          <MainContainer togglePanel={this.togglePanel} tweet={this.state.tweet} open={this.state.open} updateData={this.updateData} incrementData={this.incrementData} decrementData={this.decrementData} data={this.state.data}/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
