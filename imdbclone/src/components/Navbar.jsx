import React from 'react'
import Logo from '../movieicon.png'
const Navbar = () => {
  return (
    <div className='flex flex-row items-center space-x-4 pl-3 py-4 border-b'>
      <img src={Logo} alt="Logo" className='w-8' />
      
      <a href="" className='font-bold text-sm active:text-blue-500'>Home</a>
      <a href="" className='font-bold text-sm'>WatchList</a>
    </div>
  )
}

export default Navbar
