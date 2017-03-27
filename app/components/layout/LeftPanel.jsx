import React from 'react';
import Logo from './Logo.jsx';
import TextSectionContainer from './TextSectionContainer.jsx';

class LeftPanel extends React.Component {
  render() {

    var panelStyle;
    var showLogo;

    showLogo = false;

    return (
      <div className={'LeftPanel'} style={panelStyle}>
        <div className={'menuBar'}>
        <li>Home</li>
        <li>Top Three Companies</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <TextSectionContainer/>
        </div>
      </div>
    );
  }
}

export default LeftPanel;
