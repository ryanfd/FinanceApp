import React from 'react'
import Card from '../Card/Card'

interface Props {}

function CardList({}: Props) {
  return (
    <div className='CardList'>
        <Card companyName='Apple' ticker='APPL' price={110} />
        <Card companyName='Microsoft' ticker='MSFT' price={200} />
        <Card companyName='Tesla' ticker='TSLA' price={300} />
    </div>
  )
}

export default CardList