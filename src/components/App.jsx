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
      isSearchMode: false,
    }
  }

  handleInputClick = () => {
    this.setState({ isSearchMode: true })
  }

  handleBack = () => {
    this.setState({ isSearchMode: false })
  }

  render() {
    const { isSearchMode } = this.state

    return (
      <BrowserRouter>
        <div className="app">
          {!isSearchMode && <BookSlot />}
          {!isSearchMode && <WelcomePage handleInputClick={this.handleInputClick} />}
          {isSearchMode && <SearchPage handleBack={this.handleBack} />}
          <Trolley />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
