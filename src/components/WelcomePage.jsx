import React from 'react';
import 'assets/scss/App.scss';
import Logo from './Logo'
import HomeSeachInput from './HomeSearchInput'
import InspireButton from './InspireButton'

class WelcomePage extends React.PureComponent {
  render() {
    const { handleInputClick } = this.props

    return (
      <div className="container">
        <Logo />
        <HomeSeachInput handleInputClick={handleInputClick} />
        <span className="home__or">or</span>
        <InspireButton />
      </div>
    );
  }
}

export default WelcomePage;
