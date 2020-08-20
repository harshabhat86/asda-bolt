import React from 'react'
import 'assets/scss/Pills.scss';
import fill3 from 'assets/img/fill-3.svg'

const Pill = ({ text, secondary }) => (
  <button className={`pill__text ${secondary ? 'secondary' : ''}`}>
    {text !== 'asda' ? text : <img src={fill3} width="41px" height="12px" />}
  </button>
)

const PillContainer = ({ pills = [] }) => {
  return (
    <div className="pill__container">
      {pills.map((pill) => {
        return <Pill key={pill} text={pill} />
      })
      }
      <Pill text={'+ show more'} secondary/>
    </div>
  )
}

export default PillContainer
