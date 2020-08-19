import React from 'react'
import camera from 'assets/img/camera.svg'
import search from 'assets/img/search.svg'

const HomeSearchInput = () => (
  <div className="input__container">
    <img className="input__camera" src={camera} />
    <img className="input__search" src={search} />
    <input
      className="input__main"
      type="text"
      placeholder="Search for items, recipes, offers.."
    />
  </div>
)

export default HomeSearchInput
