import React from 'react';
import SmoothScroll from './SmoothScroll';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuBarStyle: 'menu-bar menu-bar-hidden'
    }
  }
  componentWillReceiveProps(props) {
    if(!props.open) {
      this.setState((prevState, props) => {
        return {
          MenuBarStyle: 'menu-bar menu-bar-hidden'
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          MenuBarStyle: 'menu-bar menu-bar-shown'
        }
      });
    }
  }
  render() {
    var self = this;

    return (
      <div className={this.state.MenuBarStyle}>
          {this.props.names.map((v, i) => (
            <div onMouseDown={this.props.closeMenuBar} className={'menu-bar-content'}>
              <SmoothScroll className={'menu-bar-item'} key={i} section={self.props.names[i].title} text={self.props.names[i].title}>
              </SmoothScroll>
            </div>)
            )
          }

      </div>
    );
  }
}

export default MenuBar;
