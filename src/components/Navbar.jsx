import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const navLinks=['Services','About','Contact'];

  return (
    <div className='absolute z-[9999] w-full'>
    <div className='w-[90%] inset-0 sticky-top  bg-gradient-to-r from-[#161616af] to-[#282828af] text-slate-300 flex items-center justify-between text-lg rounded-2xl px-5 py-2 mx-auto my-3'>
      <div className='flex gap-3 items-center'>
        <img src="/images/Logo.png" className='h-[60px]' alt="logo"/>
        <p className='text-white text-2xl'>CartoLogic</p>
      </div>
      <div className='flex gap-4 mr-[5%]'>
        {navLinks.map((link)=>(
          <Link className='cursor-pointer hover:text-white  hover:border-b-2 hover:border-b-blue-400'>
          <div>{link}</div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Navbar