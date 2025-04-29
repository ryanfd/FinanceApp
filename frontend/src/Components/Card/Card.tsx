import React from 'react'
import "./Card.css"

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
        <img src="https://gcaptain.com/wp-content/uploads/2014/04/637px-Cutty_Sark_ship_1869_-_SLV_H91.250-164.jpg" alt="Image" />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quia pariatur rem dolorum, repudiandae eius blanditiis magni odio amet nulla corporis impedit eum, aperiam atque in aspernatur, numquam excepturi ducimus!</p>
    </div>
    
  )
}

export default Card