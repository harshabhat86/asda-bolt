import React from 'react'
import HomeSeachInput from './HomeSearchInput'
import PillContainer from './PillContainer'
import SelectedTags from './SelectedTags'
import left from 'assets/img/left.svg'
import 'assets/scss/SearchPage.scss';


class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: true,
      inputText: '',
      tags: [
        'fruits', 'gluten free', 'ground beef', 'frozen', 'pizza', 'recipes', 'bread', 'on offers',
        'asda', 'greek yogurt', 'bananas', 'Warburtons',
      ],
      selectedTags: [],
    }
  }

  handleFocus = () => {
    console.log('handleFocus:')
    this.setState({ isFocused: true })
  }

  handleUnfocus = () => {
    console.log('handleUnfocus:')
    this.setState({ isFocused: false })
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value })
  }

  filterTags = () => {
    const { inputText, tags } = this.state
    return tags.sort((a, b) => b.indexOf(inputText) - a.indexOf(inputText)).slice(0, 8)
  }
  
  addTag = (text) => {
    const { selectedTags, tags } = this.state
    if (selectedTags.indexOf(text) === -1) {
      this.setState({
        selectedTags: selectedTags.concat(text),
        tags: tags.filter(v => v !== text),
        isFocused: true,
      })
    }
  }

  render() {
    const { isFocused, inputText, selectedTags } = this.state
    const { handleBack } = this.props

    return (
      <div  className="search__container" >
        <div className="search__top" >
          <img className="search__back-button" src={left} onClick={handleBack} />
          <div className="search__query">
            <SelectedTags selectedTags={selectedTags}>
              <HomeSeachInput
                isFocused={isFocused}
                inputText={inputText}
                handleChange={this.handleChange}
                handleUnfocus={this.handleUnfocus}
                handleInputClick={this.handleFocus}
                isSelectedTagsEmpty={!selectedTags.length}
              />
            </SelectedTags>
          </div>
        </div>
        <PillContainer pills={this.filterTags()} addTag={this.addTag} />
        <div className="search__middle" >
          <span>Add another search</span>
        </div>
        <div className="search__results" >
          <div className="search_regulars">
            Your regulars
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage
