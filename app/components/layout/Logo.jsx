import React from 'react';

class Logo extends React.Component {
  render() {
    var showLogo = this.props.showLogo;
    var logoStyle;
    if(!showLogo) {
      logoStyle = {
        visibility: 'hidden'
      }
    } else {
      logoStyle = {
        visibility: 'visible'
      }
    }

    return (
      <div>
        <img src={'./informant_1.svg'} style={logoStyle} className={'Logo'} alt={'informant'}/>
      </div>
    );
  }
}

export default Logo;
