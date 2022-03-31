import { useState, useEffect } from 'react'
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { Navbar } from '../components'
import { useGetCryptosQuery } from '../services/cryptoAPI'

const cryptocurrencies = () => {
  
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
  const { data: cryptosLists, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setCryptos(cryptosLists?.data?.coins);

    const filteredData = cryptosLists?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosLists, searchTerm]);

  return (
    <div className='gradient-bg-welcome'>
      <Navbar />
      <div className='flex mf:flex-row items-start justify-between mf:p-12 p-8 '>
        <div className='text-3xl sm:text-5xl mf:px-20 px-1 text-gradient text-white py-1 '>
          Top Cryptocurrencies
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-400 my-2" />
      <div className="flex justify-center" >
        <input placeholder='Search Cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)} className='px-2 py-1 m-3'></input>
      </div>
      <div className='flex mf:flex-row flex-wrap justify-between mf:p-10 p-8'>
        {
          cryptos.map((currency) => (
            <div className='text-white w-64 p-4 h-52 m-1 hover:shadow-stone-50 cursor-pointer shadow-md blue-glassmorphism rounded-2xl mx-auto '>
              <a href="https://coinmarketcap.com/all/views/all/" target="_blank">
          <div className='flex flex-row justify-between'>
              <div className='text-xl'>{currency.name}
              <div className="h-[1px] w-full bg-gray-400 my-2" />
              </div>
              <img src={currency.iconUrl} className="h-12" />
            </div>
            <div className='text-white w-54 p-4 h-32 m-1  cursor-pointer shadow-xl blue-glassmorphism rounded-2xl mx-auto '>
              <div>Price : { convert(Math.round(currency.price * 100) / 100)}</div>
              <div>Market Cap : { convert(currency.marketCap)}</div>
              <div>Daily Change : { currency.change}%</div>
            </div>
              
            </a>
            </div>
        )
        )}
        
      </div>
      </div>
  )
}

export default cryptocurrencies
