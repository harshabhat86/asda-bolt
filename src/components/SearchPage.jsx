import React from 'react'
import HomeSeachInput from './HomeSearchInput'
import left from 'assets/img/left.svg'
import 'assets/scss/SearchPage.scss';

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: true,
    }
  }

  render() {
    const { isFocused } = this.state
    const { handleBack } = this.props

    return (
      <div className="search__container" >
        <img className="search__back-button" src={left} onClick={handleBack} />
        <HomeSeachInput isFocused={isFocused} />
      </div>
    )
  }
}

export default SearchPage
