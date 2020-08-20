import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';
// import AboutPage from './AboutPage';
import WelcomePage from './WelcomePage';
import { BrowserRouter } from 'react-router-dom';
import BookSlot from './BookSlot'
import Trolley from './Trolley'
import SearchPage from './SearchPage'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
    }
  }

  handleInputClick = () => {
    this.setState({ isFocused: true })
  }

  handleBack = () => {
    this.setState({ isFocused: false })
  }

  render() {
    const { isFocused } = this.state

    return (
      <BrowserRouter>
        <div className="app">
          {!isFocused && <BookSlot />}
          {!isFocused && <WelcomePage handleInputClick={this.handleInputClick} />}
          {isFocused && <SearchPage handleBack={this.handleBack} />}
          <Trolley />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
