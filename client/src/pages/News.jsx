import { useState } from 'react'
import {Loader, Navbar, Welcome} from  '../components'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import newz from "../images/News.jpg"
const News = ({simplified}) => {
  const [count, setCount] = useState(0)
  const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency', count:simplified?10:100})
  // console.log(cryptoNews);
  if(!cryptoNews?.value) return <Loader/>
  return (
    <div className='gradient-bg-welcome'>
      <Navbar />
      <div className='flex mf:flex-row items-start justify-between mf:p-12 p-8 '>
        <div className='text-3xl sm:text-5xl mf:px-20 px-1 text-gradient text-white py-1 '>
          Trending News
        </div>
      </div>
      <div className='mf:px-24 px-1 '>
      <div className='mf:px-10 p-3'>
      
          {cryptoNews.value.map((news,i) => (<div className='text-white w-full m-1 hover:shadow-stone-50 cursor-pointer shadow-md white-glassmorphism rounded-none mx-auto my-10'>
            <a href={news.url} className='sm:flex block flex-row w-full justify-between '>
              <div className=' sm:w-2/3 w-full p-4 m-2'>
                <div className='text-xl'>{news.name}</div>
              <div className="h-[1px] w-full bg-gray-400 my-2" />
                
                <div className='text-sm' >
                  {news.description}
                </div>
                
                <div className='flex flex-row my-5'>
                  <img src={news.provider[0]?.image?.thumbnail?.contentUrl || newz} className="h-7 mx-3" />
                  <div className='flex flex-row justify-between'>
                      {news.provider[0].name}
                  </div>
                </div>
              </div>
                <img src={news?.image?.thumbnail?.contentUrl || newz} className='w-96 mf:h-56 mx-auto' ></img>
            </a>
          </div>))
          }

      </div>
    </div>
    </div>
  )
}

export default News
