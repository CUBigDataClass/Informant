import React, {Component} from 'react';
import CompanyContainer from './CompanyContainer.jsx';
import CompanyFactory from './CompanyFactory.jsx';
import NavBar from './NavBar.jsx';
import TopCompanies from './TopCompanies.jsx';


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
          <NavBar infos={this.props.infos} companies={this.props.companies} open={this.props.open}/>

          <CompanyContainer>
            <div className={'Section'} id={this.props.id}>
                <TopCompanies data={this.props.data} companies={this.props.companies}/>
              </div>
          </CompanyContainer>

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
