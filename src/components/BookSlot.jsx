import React from 'react';
import truck from 'assets/img/truck.svg';

const BookSlot = () => (
  <div className="book-slot__container">
    <span className="book-slot__top">
      <img src={truck}></img>
      {' '} Delivery to Monkswood way
    </span>
    <div className="book-slot__bottom">
      <span className="book-slot__date">Sunday 30 November, 12:00pm to 1:00pm</span>
      <span className="book-slot__link">Change</span>
    </div>
  </div>
)

export default BookSlot
