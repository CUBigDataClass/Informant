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
        <p>Informant aggregates social media data and produces a measure on online company sentiment and reputation. In tracking the state in real-time, Informant is able to give a clear picture of 'vox populi' opinions, whether they be spikes or smooth waves. Informant is meant as a stock market assistant tool, but also as an on-going narrative, visually analyzing real-time data into an immediate and concise scroll story.</p>
        <h4>Wave</h4>
        <p>The wave graph illustrates a subtle relation to immediate neighboring companies. It draws out the relational aspect of popular sentiment by depicting fluctuations as smooth waves of propagation.</p>
        <h4>Fragment</h4>
        <p>The fragment graph treats companies as independent of each other in sentiment. Popular sentiment is broken up into pieces, and emotions are given their distinct voice in this interpretation.</p>
        <h4>Linear</h4>
        <p>The linear graph is a formal barometer on sentiment. The companies are independent, yet relations across companies can still be drawn out.</p>
        <h4>Informant</h4>
        <p>Informant can also be thought of as a <i>web presence barometer</i> visualizing popular sentiment on top companies.</p>
        <h4>About Us</h4>
        <p>We're a company based in Boulder, CO.</p>
        <h4>Contact Us</h4>
        <p>vivoapplications@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default RightPanel;
