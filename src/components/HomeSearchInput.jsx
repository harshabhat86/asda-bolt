import React from 'react'
import camera from 'assets/img/camera.svg'
import search from 'assets/img/search.svg'

class HomeSearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef();
  }

  handleFocus = () => {
    const { isFocused } = this.props
    if (isFocused) {
      this.textInput.current.focus()
    }
  }

  componentDidUpdate (prevProps) {
    console.log('prevProps.isFocused:', prevProps.isFocused)
    console.log('this.props.isFocused:', this.props.isFocused)
    if (prevProps.isFocused === false && this.props.isFocused === true) {
      this.textInput.current.focus()
      console.log('hello')
    }
  }

  handleClickOutside = () => {
    const { handleUnfocus } = this.props
    if (this.textInput.current && !this.textInput.current.contains(event.target)) {
      handleUnfocus()
    }
  }

  componentDidMount() {
    this.handleFocus()
    document.addEventListener('mouseup', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleClickOutside);
  }

  render() {
    const { handleInputClick, isFocused, inputText, handleChange, isSelectedTagsEmpty } = this.props
    return (
      <div className={`input__container ${isFocused && !isSelectedTagsEmpty ? 'inline' : ''}`}>
        {isSelectedTagsEmpty && !inputText && <img className="input__camera" src={camera} />}
        {!isFocused && <img className="input__search" src={search} />}
        <input
          className="input__main"
          type="text"
          placeholder="Search for items, recipes, offers.."
          onClick={handleInputClick}
          onBlur={() => { this.handleFocus() }}
          ref={this.textInput}
          value={inputText}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default HomeSearchInput
