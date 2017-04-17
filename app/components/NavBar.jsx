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
          {this.props.companies.map((v, i) => (
            <SmoothScroll key={i} type={'navButton'} section={self.props.infos[i].title}>
              <p key={'p' + i}>{self.props.infos[i].title}</p>
            </SmoothScroll>
          ))}

      </div>
    );
  }
}

export default NavBar;
