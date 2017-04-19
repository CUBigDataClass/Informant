import React, {Component} from 'react';


class MenuBarIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuBarIconStyle: 'MenuBarIcon unclicked'
    }
    this.toggleIcon = this.toggleIcon.bind(this);
  }
  toggleIcon() {
    this.setState((prevState, props) => {
      var newProp;
      if(prevState.MenuBarIconStyle == 'MenuBarIcon unclicked') {
        newProp = 'MenuBarIcon clicked';
      } else {
        newProp = 'MenuBarIcon unclicked';
      }
      return {
        MenuBarIconStyle: newProp
      }
    });
  }
  componentWillUpdate(props) {
    if(props.open == true) {
      this.state.MenuBarIconStyle = 'MenuBarIcon clicked'
    } else {
      this.state.MenuBarIconStyle = 'MenuBarIcon unclicked'
    }
  }
  render() {
    return (
      <button className={this.state.MenuBarIconStyle} onMouseDown={this.props.togglePanel}>
        <div id={'topBar'}></div>
        <div id={'middleBar'}></div>
        <div id={'bottomBar'}></div>
      </button>);
  }
}


export default MenuBarIcon;
