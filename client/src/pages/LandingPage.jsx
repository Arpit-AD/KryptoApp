import { useState } from 'react'
import {Navbar, Welcome} from  '../components'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
  </div>
  )
}

export default Home
