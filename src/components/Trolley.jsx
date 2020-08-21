import React from 'react';
import trolley from 'assets/img/trolley.svg';
import one from 'assets/img/group-3.svg';
import two from 'assets/img/group-3-copy-5.svg';
import three from 'assets/img/group-3-copy.svg';
import info from 'assets/img/info.svg';
import 'assets/scss/Trolley.scss';
import { createPriceLabel } from 'util/price'

const Trolley = ({ total, cartItems }) => (
  total ? (
    <div className="trolley__checkout-container">
      <div className="trolley__items-container">
        {Object.keys(cartItems).map((link)=> {
          return <div className="trolley__item">
            <img
            src={link}
            width="48px"
            height="48px"
            className="trolley__cart-item"
          />
          <span className="trolley__quantity">1</span>
          </div>
        })}
        <div className="trolley__separator"></div>
        <div className="trolley__buttons">
          <img className="trolley__add-button" src={one} width="48px" height="48px" />
          <img className="trolley__add-button" src={two} width="48px" height="48px"  />
          <img className="trolley__add-button" src={three} width="48px" height="48px"  />
        </div>
      </div>
      <button className="trolley__checkout">
        <span className="trolley__checkout-text">
          Checkout
        </span>
        <div className="trolley__total">
          {createPriceLabel(total)}
          <img className="trolley__info" src={info} width="16px" height="16px" />
        </div>
      </button>
    </div>
  ) : (
    <div className="trolley__container">
      <img src={trolley} />
      <div className="trolley__buttons">
      <img src={one} width="48px" height="48px" />
          <img src={two} width="48px" height="48px"  />
          <img src={three} width="48px" height="48px"  />
      </div>
    </div>
  )
)

export default Trolley
