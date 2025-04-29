import React, { JSX } from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div className='CardList'>
        <Card companyName='Apple' ticker='APPL' price={110} />
        <Card companyName='Microsoft' ticker='MSFT' price={200} />
        <Card companyName='Tesla' ticker='TSLA' price={300} />
    </div>
  );
}

export default CardList