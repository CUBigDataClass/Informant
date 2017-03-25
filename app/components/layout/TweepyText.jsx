import React from 'react';
// import jsonData from '../../python.json';
import ReactDOM from 'react-dom';
import axios from 'axios';
import http from 'http';

class TweepyText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Get request stream not running...'
    };

    this.updateText = this.updateText.bind(this);
  }
  updateText() {
    // console.log('updating text');
    // var self = this;
    // http.get('./python.json', function(res) {
    // console.log(res);
    // res.setEncoding('utf8');
    // res.on('data', function(tweet) {
    //   const tweetIndex = JSON.parse(tweet).length;
    //   const tweetText = JSON.parse(tweet)[tweetIndex -1].text;
    //   self.setState({ text: tweetText });
    //   });
    //
    // res.on('end', function() {
    //   // all data has been downloaded
    //   });
    // });
  }
  componentDidMount() {
    // axios.get(`python.json`, {
    //   responseType: 'stream',
    // })
    //   .then(res => {
    //     var text = res.data[0].text;
    //     console.log(res);
    //
    //     res.on('data', function(chunk) {
    //       this.setState({ chunk });
    //       console.log(chunk);
    //     });
    //
    //
    //   });
    //
    // var self = this;
    // setInterval(function(){
    //   http.get('./python.json', function(res) {
    //   console.log(res);
    //   res.setEncoding('utf8');
    //   res.on('data', function(tweet) {
    //     const tweetText = JSON.parse(tweet)[0].text;
    //     self.setState({ text: tweetText });
    //     console.log(tweetText);
    //     });
    //
    //   res.on('end', function() {
    //     // all data has been downloaded
    //     });
    //   });
    // }, 500);
  }
  render() {
    return (
      <div style={{marginLeft: '16vw', width: '50vw', height: '100px'}}>
        <button onClick={this.updateText.bind(this)} style={{border: 'none', background: 'transparent', marginLeft: '10vw'}}>force update tweet.</button>
        <p className={'TweepyText'}>{this.state.text}</p>
      </div>
    );
  }
}

// ReactDOM.render(<TweepyText/>, document.getElementById('tweepy'));
// export default TweepyText;
