import React, {Component} from 'react';

class CompanyContainer extends Component {
  render() {
    return (
      <div className={'SectionContainer'}>
        {this.props.children}
      </div>);
  }
}


export default CompanyContainer;
