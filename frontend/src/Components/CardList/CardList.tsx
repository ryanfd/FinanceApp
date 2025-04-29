import React from 'react'
import Card from '../Card/Card'

interface Props {}

function CardList({}: Props) {
  return (
    <div className='CardList'>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default CardList