import React from 'react';
import 'assets/scss/App.scss';
import Logo from './Logo'
import HomeSeachInput from './HomeSearchInput'
import InspireButton from './InspireButton'
import ProductModule from './ProductModule'

class WelcomePage extends React.PureComponent {
  render() {
    const { handleInputClick } = this.props

    return (
      <div className="container">
        <Logo />
        <HomeSeachInput handleInputClick={handleInputClick} />
        <span className="home__or">or</span>
        <InspireButton />
        <div className="search_regulars">
          <ProductModule
            image="https://ui.assets-asda.com:443/g/v5/004/137/5039303004137_130_IDShot_4.jpeg"
            title="Costa Coffee yo"
            price="£2.55"
            pricePerUom="(25p/each)"
          />
        </div>
      </div>
    );
  }
}

export default WelcomePage;
