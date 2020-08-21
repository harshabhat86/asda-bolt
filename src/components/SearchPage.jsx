import React from 'react'
import HomeSeachInput from './HomeSearchInput'
import PillContainer from './PillContainer'
import SelectedTags from './SelectedTags'
import ProductModule from './ProductModule'
import left from 'assets/img/left.svg'
import 'assets/scss/SearchPage.scss';

import { yourRegulars } from '../data/yourRegulars'
import { searchTerms } from '../data/searchResults'
import { tags } from '../data/tagResults'

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
      searchTerm: '',
    }
  }

  searchGroceries = (searchTerm) => {
    if (!searchTerm) return yourRegulars
    const val = searchTerms[searchTerm]
    return val || yourRegulars
  }

  getPills = (searchTerm) => {
    const defaultPills = [
      'fruits', 'gluten free', 'ground beef', 'frozen', 'pizza', 'recipes', 'bread', 'on offers',
      'asda', 'greek yogurt', 'bananas', 'Warburtons',
    ]
    if (!searchTerm) return defaultPills
    const val = tags[searchTerm] || defaultPills
    this.setState({ tags: val })

  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleUnfocus = () => {
    this.setState({ isFocused: false })
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value })
    this.getPills(event.target.value)
  }

  handleKeyUp = (event) => {
    const { handleShowResults } = this.props
    if (event.keyCode == 13) {
      handleShowResults(this.state.inputText)
      this.setState({ inputText: '', isFocused: false })
    }
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
    const { handleBack, handleAddToCart, view, searchTerm } = this.props
    const results = view === 'results' ? this.searchGroceries(searchTerm) : this.searchGroceries(inputText)
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
                handleKeyUp={this.handleKeyUp}
              />
            </SelectedTags>
          </div>
        </div>
        {view === 'input' && <PillContainer pills={this.filterTags()} addTag={this.addTag} />}
        <div className="search__middle" >
          <span>Add another search</span>
        </div>
        {view === 'input' && (
          <div className="search__results" >
            Your regulars
            <div className="search__regulars">
              {
                results.length > 0 && results.map(item => (
                  <ProductModule
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    pricePerUom={item.pricePerUom}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              }
            </div>
          </div>
        )}
        {view === 'results' && (
          <div className="search__results">
            {view === 'results' &&
              <SelectedTags selectedTags={[searchTerm]}>
                <button className="tags__plus" >
                  {'+'}
                </button>
              </SelectedTags>
            }
            <div className="product-container__wrapper">{
              results.length > 0 && results.map(item => (
                <ProductModule
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  pricePerUom={item.pricePerUom}
                  handleAddToCart={handleAddToCart}
                />
              ))
            }</div>
        </div>
        )}
      </div>
    )
  }
}

export default SearchPage
