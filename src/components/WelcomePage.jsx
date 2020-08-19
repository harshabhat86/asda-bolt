import React from 'react';
import 'assets/scss/App.scss';
import BookSlot from './BookSlot.jsx'
import Logo from './Logo.jsx'
import HomeSeachInput from './HomeSearchInput.jsx'
import InspireButton from './InspireButton.jsx'

class WelcomePage extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <BookSlot />
        <Logo />
        <HomeSeachInput />
        <span className="home__or">or</span>
        <InspireButton />
      </div>
    );
  }
}

export default WelcomePage;
