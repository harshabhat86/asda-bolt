import React from 'react'
import 'assets/scss/Pills.scss';
import fill3 from 'assets/img/fill-3.svg'

const Pill = ({ text, secondary, addTag }) => (
  <button className={`pill__text ${secondary ? 'secondary' : ''}`} onClick={() => addTag(text)} >
    {text !== 'asda' ? text : <img src={fill3} width="41px" height="12px" />}
  </button>
)

const PillContainer = ({ pills = [], addTag }) => {
  return (
    <div className="pill__container">
      {pills.map((pill) => {
        return <Pill key={pill} text={pill} addTag={addTag} />
      })}
      <Pill text={'+ show more'} addTag={() => {}} secondary/>
    </div>
  )
}

export default PillContainer
