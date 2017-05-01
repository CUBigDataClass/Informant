import React, {Component} from 'react';
import MenuBar from './components/MenuBar.jsx';
import MenuBarIcon from './components/MenuBarIcon.jsx';
var SmoothScroll = require('./components/SmoothScroll.js');
var favicon = require('./assets/images/favicon.ico');
import Companies from './info/companies.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      open: false,
      MenuBarIconStyle: 'menu-bar-icon',
      slideContentState: 'main menu-bar-close'
    };
    this.togglePanel = this.togglePanel.bind(this);
    this.closeMenuBar = this.closeMenuBar.bind(this);
    this.slideContent = this.slideContent.bind(this);
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
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.props.children ?
            React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            }) :
            null}
        </ReactCSSTransitionGroup>
        </div>
      </div>);
  }
}


export default App;
