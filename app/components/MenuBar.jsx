import React from 'react';
import SmoothScroll from './SmoothScroll';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuBarStyle: 'MenuBar'
    }
  }
  componentWillReceiveProps(props) {
    if(!props.open) {
      this.setState((prevState, props) => {
        return {
          MenuBarStyle: 'MenuBar MenuBarHidden'
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          MenuBarStyle: 'MenuBar'
        }
      });
    }
  }
  render() {
    var self = this;

    return (
      <div className={this.state.MenuBarStyle}>
          {this.props.companies.map((v, i) => (
            <div onMouseDown={this.props.closeMenuBar}>
              <SmoothScroll className={'menu-bar-item'} key={i} type={'menuButton'} section={self.props.infos[i].title} text={self.props.infos[i].title}>
              </SmoothScroll>
            </div>)
            )
          }

      </div>
    );
  }
}

export default MenuBar;
