import React from 'react';
import SmoothScroll from './SmoothScroll';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavBarStyle: 'NavBar'
    }
  }
  componentWillReceiveProps(props) {
    if(!props.open) {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: 'NavBar NavBarHidden'
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          NavBarStyle: 'NavBar'
        }
      });
    }
  }
  render() {

    var self = this;

    return (
      <div className={this.state.NavBarStyle}>
          {this.props.names.map((v, i) => (
            <SmoothScroll key={i} className={'nav-bar-item'} section={self.props.names[i].title} text={self.props.names[i].title}>
            </SmoothScroll>
          ))}
      </div>
    );
  }
}

export default NavBar;
