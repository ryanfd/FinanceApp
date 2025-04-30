import React, { JSX, SyntheticEvent } from 'react'
import "./Card.css"
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card : React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : JSX.Element => {
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
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
    
  )
}

export default Card