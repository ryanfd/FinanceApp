import React, { SyntheticEvent } from 'react'

interface Props {
    symbol: string;
    onPortfolioCreate: (e: SyntheticEvent) => void
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddPortfolio;