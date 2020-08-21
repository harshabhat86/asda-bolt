import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';
// import AboutPage from './AboutPage';
import WelcomePage from './WelcomePage';
import { BrowserRouter } from 'react-router-dom';
import BookSlot from './BookSlot'
import Trolley from './Trolley'
import SearchPage from './SearchPage'
import { priceLabelToNumber } from 'util/price'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isSearchMode: false,
      total: 0,
      cartItems: {},
    }
  }

  handleInputClick = () => {
    this.setState({ isSearchMode: true })
  }

  handleBack = () => {
    this.setState({ isSearchMode: false })
  }

  handleAddToCart = (val, image) => {
    const { total, cartItems } = this.state
    if (!cartItems[image]) {
      this.setState({
        total: total + priceLabelToNumber(val),
        cartItems: { ...cartItems, [image]: true }
      })
    }
  }

  render() {
    const { isSearchMode, total, cartItems } = this.state

    return (
      <BrowserRouter>
        <div className="app">
          {!isSearchMode && <BookSlot />}
          {!isSearchMode && <WelcomePage handleInputClick={this.handleInputClick} />}
          {isSearchMode && <SearchPage handleBack={this.handleBack} handleAddToCart={this.handleAddToCart} />}
          <Trolley total={total} cartItems={cartItems} />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
