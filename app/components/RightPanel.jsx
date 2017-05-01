import React from 'react';
import Logo from './Logo.jsx';

class RightPanel extends React.Component {
  render() {

    var panelStyle;
    var showLogo;
    panelStyle = {
      right: '0'
    }
    showLogo = true;

    return (
      <div className={'RightPanel'} style={panelStyle}>
        <Logo showLogo={showLogo}/>
        <div className={'panelStories'}>
        <h3>Informant is a <i>social metrics dashboard</i>.</h3>
        <h3>It visualizes the general mood of the public on top companies.</h3>

        <h4>Wave</h4>
        <p>The wave graph illustrates a subtle relation to immediate neighboring companies. It draws out the relational aspect of popular sentiment by depicting fluctuations as smooth waves of propagation.</p>
        <h4>Fragment</h4>
        <p>The fragment graph treats companies as independent of each other in sentiment. Popular sentiment is broken up into pieces, and emotions are given their distinct voice in this interpretation.</p>
        <h4>Linear</h4>
        <p>The linear graph is a formal barometer on sentiment. The companies are independent, yet relations across companies can still be drawn out.</p>
        <h4>About Informant</h4>
        <p>A project based in Boulder, CO.</p>
        <h4>Contact Informant</h4>
        <p>vivoapplications@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default RightPanel;
