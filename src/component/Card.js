import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
<div className="card--badge">SOLD OUT</div>
<img src={'../Images/&{props.img}'} className="card--image" />
<div className="card--stats">
<img src="../Images/Star 1 (1).png" className='card--star' />
<span>{props.rating}</span>
<span></span>


</div>
    </div>
  )
}

export default Card