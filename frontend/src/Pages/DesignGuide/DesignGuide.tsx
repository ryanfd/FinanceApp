import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/TestData';

type Props = {}

const tableConfig = [
    {
      label: "Market Cap",
      render: (company: any) =>company.marketCapTTM,
      subTitle: "Total value of all a company's shares of stock",
    }
];

const DesignGuide = (props: Props) => {
    return (
        <>
            <h1>Stockinator Design Page</h1>
            <h2>This is the Stockinator's design page. This is where we will house various design aspects of the app.</h2>

            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <Table />

            <h3>
                Table - Table takes in a configuration object and company data as
                params. Use the config to style your table.
            </h3>
        </>
      )
}

export default DesignGuide