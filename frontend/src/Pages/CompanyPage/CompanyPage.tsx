import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';
import TenKFinder from '../../Components/TenKFinder/TenKFinder';
import {formatRatio } from '../../Helpers/NumberFormatting';

interface Props {}

const CompanyPage = (props: Props) => {
    // https:localhost:3000/ -> get data from URL
    let { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() =>{
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }
        getProfileInit();
    }, []);

  return (
    <>
        { company 
            ? ( 
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <Sidebar />
                    <CompanyDashboard ticker={ticker!}>
                        <Tile title="Company Name" subtitle={company.companyName} />
                        <Tile title="Price" subtitle={"$" + formatRatio(company.price).toString()} />
                        <Tile title="Discounted Cash Flow" subtitle={"$" + formatRatio(company.dcf).toString()} />
                        <Tile title="Sector" subtitle={company.sector} />
                        <TenKFinder ticker={company.symbol} />
                        <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>
                            {company.description}
                        </p>
                    </CompanyDashboard>
                </div>
            ) 
            : (
                <Spinner />
            )
        }
    </>
  )
}

export default CompanyPage