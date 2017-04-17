import React, {Component} from 'react';
import Company from './Company.jsx';



class CompanyFactory extends Component {
  render() {
    return (
      <div className={'Section'} id={this.props.id}>
        <Company companies={this.props.companies} title={this.props.info.title} text={this.props.info.text} data={this.props.data}/>
      </div>);
  }
}


export default CompanyFactory;
