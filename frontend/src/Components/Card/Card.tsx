import React from 'react'
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src="https://gcaptain.com/wp-content/uploads/2014/04/637px-Cutty_Sark_ship_1869_-_SLV_H91.250-164.jpg" alt="Image" />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quia pariatur rem dolorum, repudiandae eius blanditiis magni odio amet nulla corporis impedit eum, aperiam atque in aspernatur, numquam excepturi ducimus!</p>
    </div>
    
  )
}

export default Card