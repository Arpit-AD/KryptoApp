import { useState } from 'react'
import { Loader, Navbar } from '../components'
import { useGetCryptosQuery } from '../services/cryptoAPI'

const Home = () => {
  // const [count, setCount] = useState(0)

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
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  // console.log(data);
  if (isFetching) return <Loader/>;
  return (
    <div className='gradient-bg-welcome'>
      <Navbar />
      <div>
      <div className='flex mf:flex-row items-start justify-between mf:p-20 p-16 '>
        <div className='mf:px-20 px-1'>
      <div className="text-3xl sm:text-5xl mf:p-2 p-5 text-white text-gradient py-1  ">
          Crypto is for Everyone

          </div>
        <p className="text-white mf:p-2 p-5 text-base text-white ">We’re building an exchange that will bring anyone who believes in crypto to join the digital cryptocurrency revolution. <br/> The world is moving on to this revolution at an unprecedented pace.</p>

          </div>
        </div>
      <div className='flex flex-row text-white justify-center flex-wrap p-10 mt-4 w-full white-glassmorphism rounded-none'>
        <div className='p-5 text-center '>Total Cryptocurrencies<br/>{globalStats.total}</div>
        <div className='p-5 text-center'>Total Exchanges<br/>{globalStats.totalExchanges}</div>
          <div className='p-5 text-center'>Total Market Cap<br />{convert(globalStats.totalMarketCap)}</div>
        <div className='p-5 text-center'>Total 24h Volume<br/>{convert(globalStats.total24hVolume)}</div>
        <div className='p-5 text-center'>Total Markets<br/>{convert(globalStats.totalMarkets)}</div>
        </div>
        </div>
  </div>
  ) 
}

export default Home
