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


var App = React.createClass({
  getInitialState() {
    return {
      data: [14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2, 14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2, 14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2, 14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2, 14, 18, 15, 16, 23, 42, 5, 16, 11, 57, 55, 2],
      tweet: 'Not streaming right now...',
      open: false
    }
  },
  togglePanel() {
    this.setState((prevState, props) => {
          return {
            open : !prevState.open
          }
        });
  },
  updateData() {

    this.setState((prevState, props) => {
          return {
            data : prevState.data.map((i) => Math.floor(Math.random() * 25))
          }
        });
  },
  incrementData() {
    this.setState((prevState, props) => {
            return {
            data: prevState.data.map((i) => i + 10)
          }
        });
  },
  decrementData() {
    this.setState((prevState, props) => {
            return {
            data: prevState.data.map((i) => i - 10)
          }
        });
  },
  componentDidMount() {
    var self = this;
        // Initialize socket.io
        var socket = io.connect();

        // On tweet event emission...
        socket.on('tweet', function (tweetData) {
          console.log('new tweet!');
          // console.log(tweetData);
          // console.log(tweetData.followers_count);
          //favourites_count
          //followers_count
          //friends_count
          //
          // console.log(self.state.data.map((v) => {tweetData.user.favourites_count}));



       self.setState((prevState, props) => {
               return {
               tweet: tweetData.text + " " + tweetData.user.followers_count * 0.0015 + 20,
               data: prevState.data.map((i) => Math.floor(Math.random() * tweetData.user.followers_count * 0.0015 + 20))
             }
        });

     });
  },
  render() {
    var slideMenuBar;
    if(this.state.open) {
      slideMenuBar = {
        marginLeft: '0vw'
      }
    } else {
      slideMenuBar = {
        marginLeft: '15vw'
      }
    }

    var str = <li>Hello.</li>;
    return (
      <div className={'App'}>
        <LeftPanel/>
        <div className={'MainContainer'} style={slideMenuBar}>
          <Header/>
          <button className={'slideMenuBarButton'} onMouseDown={this.togglePanel}>toggle menu bar</button>
          <p style={{color: 'white'}}>{this.state.tweet}</p>
          <InfoStory data={this.state.data}/>
          <div className={'controlPanel'}>
            <button onClick={this.updateData}><p>Update Data</p></button>
            <button onClick={this.decrementData}><p>-</p></button>
            <button onClick={this.incrementData}><p>+</p></button>
          </div>
          <RightPanel/>
          <Footer/>
        </div>
      </div>
    )
  }
});

module.exports = App;
