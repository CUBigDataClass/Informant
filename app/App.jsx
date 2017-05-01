import React, {Component} from 'react';
import MenuBar from './components/MenuBar.jsx';
import MenuBarIcon from './components/MenuBarIcon.jsx';
var SmoothScroll = require('./components/SmoothScroll.js');
import Companies from './info/companies.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      open: false,
      MenuBarIconStyle: 'menu-bar-icon',
      slideContentState: 'main menu-bar-close',
      amazonData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      appleData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      facebookData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      googleData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      lyftData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      microsoftData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      twitterData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      uberData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.closeMenuBar = this.closeMenuBar.bind(this);
    this.slideContent = this.slideContent.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  updateData(company, emotion, score) {
    var newData = this.state.data[0];

    if(company == "Amazon") {
        newData = this.state.amazonData;
        newData[emotion] = score;
        this.setState({
            amazonData: newData
          });
    } else if(company == "Apple") {
        newData = this.state.appleData;
        newData[emotion] = score;
        this.setState({
            appleData: newData
          });
    } else if(company == "Facebook") {
        newData = this.state.facebookData;
        newData[emotion] = score;
        this.setState({
            facebookData: newData
          });
    } else if(company == "Google") {
        newData = this.state.googleData;
        newData[emotion] = score;
        this.setState({
            googleData: newData
          });
    } else if(company == "Lyft") {
        newData = this.state.lyftData;
        newData[emotion] = score;
        this.setState({
            lyftData: newData
          });
    } else if(company == "Microsoft") {
        newData = this.state.microsoftData;
        newData[emotion] = score;
        this.setState({
            microsoftData: newData
          });
    } else if(company == "Twitter") {
        newData = this.state.twitterData;
        newData[emotion] = score;
        this.setState({
            twitterData: newData
          });
    } else if(company == "Uber") {
        newData = this.state.uberData;
        newData[emotion] = score;
        this.setState({
            uberData: newData
          });
    }
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
  render() {
    const companies = Companies.map((section, i) => {
      return section.title;
    });
    return (
      <div>
        <img className='bg-image' src={require('./assets/images/mountains.jpg')}/>
        <MenuBar names={Companies} open={this.state.open} closeMenuBar={this.closeMenuBar}/>
        <MenuBarIcon togglePanel={this.togglePanel} open={this.state.open}/>
        <div className={this.state.slideContentState}>
          <ReactCSSTransitionGroup
          component="div"
          transitionName={"on"}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>
          {this.props.children ?
            React.cloneElement(this.props.children, {
              key: this.props.location.pathname,
              updateData: this.updateData
            }) :
            null}
        </ReactCSSTransitionGroup>
        </div>
      </div>);
  }
}


export default App;
