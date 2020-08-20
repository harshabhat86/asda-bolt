import React from 'react';
import trolley from 'assets/img/trolley.svg';
import one from 'assets/img/group-3.svg';
import two from 'assets/img/group-3-copy-5.svg';
import three from 'assets/img/group-3-copy.svg';
import 'assets/scss/Trolley.scss';

const Trolley = () => (
  <div className="trolley__container">
    <img src={trolley} />
    <div className="trolley__text">
      <span className="trolley__top-text">Ohh... it's empty</span>
      <span className="trolley__bottom-text">Get started here</span>
    </div>
    <div className="trolley__buttons">
      <img src={one} />
      <img src={two} />
      <img src={three} />
    </div>
  </div>
)

export default Trolley
