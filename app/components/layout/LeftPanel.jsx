import React from 'react';
import Logo from './Logo.jsx';
import TextSectionContainer from './TextSectionContainer.jsx';

class LeftPanel extends React.Component {
  render() {

    var panelStyle;
    var showLogo;
    panelStyle = {
        left: '11.11vw',
        width: '11.11vw'
    }
    showLogo = false;

    return (
      <div className={'LeftPanel'} style={panelStyle}>
        <Logo showLogo={showLogo}/>
        <div className={'panelStories'}>
        <p>Apple this week received mostly negative reviews from most of the popular platforms.</p>
        <TextSectionContainer/>
        </div>
      </div>
    );
  }
}

export default LeftPanel;
