import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

const Navbar = () => {
  const dispatch=useDispatch()
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 p-2'>
        <div>
            <h3 className='text-2xl font-bold text-gray-600 '> { new Date().toUTCString().slice(0, 16)}</h3>

            <h1 className='text-3xl font-bold text-gray-900 mb-5 '> Flavoro Foods</h1>
        </div>
        <div>
            <input type="search" name="search" id="" placeholder='Search here' autoComplete='off' onChange={(e)=> dispatch(setSearch(e.target.value))} className='p-3 border border-gray-500 rounded-xl w-full lg:w-[28vw] outline-none mx-1'/>
        </div>
    </nav>

      
    
  )
}

export default Navbar
