import { useState } from 'react'
import { BsArrowUpSquare } from 'react-icons/bs'
import { Footer, Navbar } from './components'
import { Home, Cryptocurrencies, News, Exchange, LandingPage} from './pages'
import {Routes , Route, Link, BrowserRouter} from 'react-router-dom'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    
   
      
    <BrowserRouter>
        <div className="min-h-screen">
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/exchanges' element={<Exchange />} />
          <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    
      
  )
}

export default App
