import React from 'react';

class ControlPanel extends React.Component {
  render() {
    return (
      <div className={'controlPanel'}>
        <button onMouseDown={this.props.updateData}><p>Update Data</p></button>
        <button onMouseDown={this.props.decrementData}><p>-</p></button>
        <button onMouseDown={this.props.incrementData}><p>+</p></button>
      </div>
    );
  }
}

export default ControlPanel;
