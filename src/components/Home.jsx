import React from 'react'
import Hero from './Hero'
import Initiatives from './Initiatives'
import Footer from './Footer'
const home = () => {
  return (
    <div className='bg-[#2b2b2b]'>
      <Hero/>
      <Initiatives />
      <Footer/>
    </div>
  )
}

export default home