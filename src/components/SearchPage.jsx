import React from 'react'
import HomeSeachInput from './HomeSearchInput'
import left from 'assets/img/left.svg'
import 'assets/scss/SearchPage.scss';

const SearchPage = () => (
  <div className="search__container" >
    <img className="search__back-button" src={left} />
    <HomeSeachInput />
  </div>
)

export default SearchPage
