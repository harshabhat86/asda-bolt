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
      view: 'home',
      total: 0,
      cartItems: {},
    }
  }

  handleInputClick = () => {
    this.setState({ view: 'input' })
  }

  handleBack = () => {
    this.setState({  view: 'home' })
  }

  handleShowResults = (searchTerm) => {
    this.setState({ view: 'results', searchTerm })
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
    const { view, total, cartItems, searchTerm } = this.state

    return (
      <BrowserRouter>
        <div className="app">
          {view !== 'input' && <BookSlot />}
          {view === 'home' && <WelcomePage handleInputClick={this.handleInputClick} />}
          {view !== 'home' && 
            <SearchPage
              handleBack={this.handleBack}
              handleAddToCart={this.handleAddToCart}
              handleShowResults={this.handleShowResults}
              view={view}
              searchTerm={searchTerm}
            />}
          <Trolley total={total} cartItems={cartItems} handleShowResults={this.handleShowResults} />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
