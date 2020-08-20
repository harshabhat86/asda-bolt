import React from 'react'
import HomeSeachInput from './HomeSearchInput'
import PillContainer from './PillContainer'
import ProductModule from './ProductModule'
import left from 'assets/img/left.svg'
import 'assets/scss/SearchPage.scss';

import { yourRegulars } from '../data/yourRegulars'

const tags = [
  'fruits', 'gluten free', 'ground beef', 'frozen', 'pizza', 'recipes', 'bread', 'on offers',
  'asda', 'greek yogurt', 'bananas', 'Warburtons',
]

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: true,
      inputText: '',
    }
  }

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  filterTags = () => {
    const { inputText } = this.state
    return tags.sort((a, b) => b.indexOf(inputText) - a.indexOf(inputText)).slice(0, 8)
  }

  addTags = () => {

  }

  render() {
    const { isFocused, inputText } = this.state
    const { handleBack } = this.props
    return (
      <div  className="search__container" >
        <div className="search__top" >
          <img className="search__back-button" src={left} onClick={handleBack} />
          <HomeSeachInput isFocused={isFocused} inputText={inputText} handleChange={this.handleChange} />
        </div>
        <PillContainer pills={this.filterTags()} />
        <div className="search__middle" >
          <span>Add another search</span>
        </div>
        <div className="search__results" >
          Your Regulars
          <div className="search__regulars">
            {
              yourRegulars.map(item => (
                <ProductModule
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  pricePerUom={item.pricePerUom}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage
