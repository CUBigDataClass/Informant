import React from 'react';

class ControlPanel extends React.Component {
  render() {
    return (
      <div className={'controlPanel'}>
        <button onClick={this.props.updateData}><p>Update Data</p></button>
        <button onClick={this.props.decrementData}><p>-</p></button>
        <button onClick={this.props.incrementData}><p>+</p></button>
      </div>
    );
  }
}

export default ControlPanel;
