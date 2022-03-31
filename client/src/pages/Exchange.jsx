import { useState } from 'react'
import {Loader, Navbar, Welcome} from  '../components'
import { useGetExchangesQuery } from '../services/cryptoAPI';

const Exchange = () => {

  function convert(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+12

      ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + "T"
    
    :  Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));
  }

  const {data, isFetching} = useGetExchangesQuery();
  const exchangeslist = data?.data?.exchanges;

  // console.log(exchangeslist);

  if (isFetching) return <Loader />;

  return (
    <div className='gradient-bg-welcome'>
      <Navbar/>
      <div className=' mf:p-12 p-8  text-white'>
      <div className='flex mf:flex-row items-start justify-between mf:p-12 p-8 '>
        <div className='text-3xl sm:text-5xl mf:px-20 px-1 text-gradient text-white py-1 '>
            Cryptocurrency Exchanges

        </div>
        </div>
        <div className="h-[1px] w-full bg-gray-400 my-2" />
        <table className='w-full md:table block overflow-x-scroll' >
        <tr className=' h-16'> 
          <td className='min-w-fit p-4 mf:text-lg text-base'>Serial Id</td>
          <td className='min-w-fit p-4 mf:text-lg text-base'>Image</td>
            <td className='min-w-fit p-4 mf:text-lg text-base'>Exchange Name</td>
              <td className='min-w-fit p-4 mf:text-lg text-base'>Volume(24h)</td>
            <td className='min-w-fit p-4 mf:text-lg text-base'>BTCprice</td>
              <td className='min-w-fit p-4 mf:text-lg text-base'>Price</td>
            <td className='min-w-fit p-4 mf:text-lg text-base'>Markets</td>
            
          </tr>
          
          {exchangeslist.map((exchangeName) => (
           
              <tr className=' h-16'>
                <td className="min-w-fit p-4 mf:text-base text-sm" >{exchangeName.rank}</td>
                <td className="min-w-fit p-4 mf:text-base text-sm"><img src={exchangeName.iconUrl} className="h-12 max-w-5xl" /></td>
            <td className="min-w-fit p-4 mf:text-base text-sm"  >{exchangeName.name}</td>
              <td className="min-w-fit p-4 mf:text-base text-sm">{convert(exchangeName["24hVolume"])}</td>
              <td className="min-w-fit p-4 mf:text-base text-sm"  >{(Math.round(exchangeName.btcPrice * 100) / 100).toFixed(2)}</td>
              
              <td className="min-w-fit p-4 mf:text-base text-sm" >{convert(exchangeName.price)}</td>
              <td className="min-w-fit p-4 mf:text-base text-sm" >{exchangeName.numberOfMarkets}</td>
              
                </tr>

      
          ))
            }
        </table>
      </div>
    </div>
  )
}

export default Exchange