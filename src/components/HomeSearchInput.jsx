import React from 'react'
import camera from 'assets/img/camera.svg'
import search from 'assets/img/search.svg'

class HomeSearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const { isFocused } = this.props
    if (isFocused) {
      this.textInput.current.focus();
    }
  }

  render() {
    const { handleInputClick, isFocused } = this.props
    return (
      <div className="input__container">
        <img className="input__camera" src={camera} />
        {!isFocused && <img className="input__search" src={search} />}
        <input
          className="input__main"
          type="text"
          placeholder="Search for items, recipes, offers.."
          onClick={handleInputClick}
          ref={this.textInput}
        />
      </div>
    )
  }
}

export default HomeSearchInput
