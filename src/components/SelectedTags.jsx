import React from 'react'
import 'assets/scss/SelectedTags.scss';
import fill3 from 'assets/img/fill-3.svg'
import close from 'assets/img/close.svg'

const Tags = ({ text }) => (
  <button className="tags__text" >
    {text !== 'asda' ? text : <img src={fill3} width="41px" height="12px" />}
    <img src={close} className="tags__close" width="18px" height="18px" />
  </button>
)

const SelectedTags = ({ children, selectedTags = [] }) => {
  return (
    <div className="tags__container">
      {selectedTags.map((tag) => {
        return <Tags key={tag} text={tag} />
      })}
      {children}
    </div>
  )
}

export default SelectedTags
