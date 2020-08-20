import React from 'react'
import 'assets/scss/ProductModule.scss';
import plus from '../assets/img/plus.svg'

const tags = [
  'fruits', 'gluten free', 'ground beef', 'frozen', 'pizza', 'recipes', 'bread', 'on offers',
  'asda', 'greek yogurt', 'bananas', 'Warburtons',
]

class ProductModule extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { image, title, price, pricePerUom } = this.props

    return (
      <div  className="product-container" >
        <div className="product-container__image-container" >
          <img className="product-container__image" src={image} />
        </div>
        <div className="product-container__title">{title}</div>
        <div className="product-container__desc" >
          <div className="product-container__details">
            <div className="product-container__price">{price}</div>
            <div className="product-container__price-per-uom">{pricePerUom}</div>
          </div>
          <img className="product-container__plus" src={plus}/>
        </div>
      </div>
    )
  }
}

export default ProductModule
