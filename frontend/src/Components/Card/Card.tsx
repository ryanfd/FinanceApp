import React, { JSX } from 'react'
import "./Card.css"
import { CompanySearch } from '../../company';

interface Props {
  id: string;
  searchResult: CompanySearch
}

const Card : React.FC<Props> = ({id, searchResult}: Props) : JSX.Element => {
  return (
    <div className='card'>
        <img src="https://gcaptain.com/wp-content/uploads/2014/04/637px-Cutty_Sark_ship_1869_-_SLV_H91.250-164.jpg" alt="company logo" />
        <div className='details'>
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
        </div>
        <p className='info'>
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
    </div>
    
  )
}

export default Card