import React, {Component} from 'react';
import MainContainer from './components/MainContainer.jsx';
import SectionsData from './info/companies.json';
import MenuBar from './components/MenuBar.jsx';
import MenuBarIcon from './components/MenuBarIcon.jsx';
import NavBar from './components/NavBar.jsx';

var io = require('socket.io-client');
var SmoothScroll = require('./components/SmoothScroll.js');
var favicon = require('./assets/images/favicon.ico');

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
        5, 6, 8, 1
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
    // Initialize socket.io
    var socket = io.connect();

    // On tweet event emission...
    socket.on('tweet', function (tweetData) {

    this.setState((prevState, props) => {
        return {
        tweet: tweetData.text + " " + tweetData.user.followers_count * 0.0015 + 20,
        data: prevState.data.map((i) => Math.floor(Math.random() * tweetData.user.followers_count * 0.0015 + 20))
        }
      });
    });

    this.setState({
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
