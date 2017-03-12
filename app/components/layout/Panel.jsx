import React from 'react';
import Logo from './Logo.jsx';

class Panel extends React.Component {
  render() {

    var panelStyle;
    var showLogo;
    if(this.props.orientation == 'left') {
      panelStyle = {
        left: '0'
      }
      showLogo = false;
    } else {
      panelStyle = {
        right: '0'
      }
      showLogo = true;
    }

    return (
      <div className={'Panel'} style={panelStyle}>
        <Logo showLogo={showLogo}/>
        <div className={'panelStories'}>
        <p>Apple this week received mostly negative reviews from most of the popular platforms.</p>
        </div>
      </div>
    );
  }
}

export default Panel;
