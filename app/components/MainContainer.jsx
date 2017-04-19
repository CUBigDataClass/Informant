import React, {Component} from 'react';
import CompanyContainer from './CompanyContainer.jsx';
import CompanyFactory from './CompanyFactory.jsx';
import Intro from './Intro.jsx';


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBarState: ''
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.open) {
      this.state.menuBarState = 'MainContainer menuBarOpen';
    } else {
      this.state.menuBarState = 'MainContainer menuBarClose';
    }
  }
  render() {
    var self = this;

    return (
        <div className={this.state.menuBarState}>
          <Intro data={this.props.data} companies={this.props.companies}/>

          <CompanyContainer>
            {this.props.companies.map((v, i) => (
              <CompanyFactory companies={this.props.companies} data={this.props.data} id={self.props.infos[i].title} key={i} info={self.props.infos[i]}/>
            ))}
          </CompanyContainer>
        </div>
    )
  }
}

export default MainContainer;
