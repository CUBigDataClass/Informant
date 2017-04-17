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
            <SmoothScroll key={i} type={'menuButton'} section={self.props.infos[i].title}>
              <p onMouseDown={this.props.closeMenuBar} key={'p' + i}>{self.props.infos[i].title}</p>
            </SmoothScroll>)
            )
          }

      </div>
    );
  }
}

export default MenuBar;
