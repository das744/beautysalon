import React from 'react'

const SCard = (props) => {
  return (
    <div>

<div class="box"> 
        <span class="number">{props.no}</span>
        <img src={props.imgsrc} alt=""/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default SCard