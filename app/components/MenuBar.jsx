import React from 'react';
import SmoothScroll from './SmoothScroll';
import {Link} from 'react-router';


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
        <Link to={'home'}>
          <div onMouseUp={this.props.closeMenuBar} className={'menu-bar-content'}>
            <SmoothScroll className={'menu-bar-item'} section={'home'} text={'Home'}>
            </SmoothScroll>
          </div>
        </Link>
          {this.props.names.map((v, i) => (
            <Link to={this.props.names[i].title.toLowerCase()}>
              <div onMouseUp={this.props.closeMenuBar} className={'menu-bar-content'}>
                <SmoothScroll className={'menu-bar-item'} key={i} section={self.props.names[i].title} text={self.props.names[i].title}>
                </SmoothScroll>
              </div>
            </Link>)
            )
          }
      </div>
    );
  }
}

export default MenuBar;
