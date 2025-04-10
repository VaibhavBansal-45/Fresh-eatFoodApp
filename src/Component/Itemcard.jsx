import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty, removeFromCart } from '../redux/slices/Cartslice'

const Itemcard = ({id, name,qty,price,img}) => {
  const dispatch=useDispatch();
  return (
    <div className='flex gap-2 shadow-lg rounded-lg p-2 mb-3 '>
        <span onClick={() => {
          dispatch(removeFromCart({ id }));
}} className="absolute right-7 text-gray-600 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-3-3v3" />
</svg>

    </span>
      <img src={img} alt="" className='w-[50px] h-[50px]'/>
      <div>
        <h2>{name}</h2>
        <div className='flex '>
            <span className='text-green-500 font-bold'>₹{price}</span>
            <div className='flex items-center space-x-2 absolute right-7'>
                <span onClick={()=> qty>=1? dispatch(incrementQty({id})): qty=0} className='w-7 h-7 flex items-center justify-center border border-gray-700 text-gray-700 hover:text-white hover:bg-green-500 hover:border-green-500 rounded-md text-sm cursor-pointer transition'>🞢</span>
                <span>{qty}</span>
                <span onClick={() => {
    if (qty > 1) {
      dispatch(decrementQty({ id }));
    } else if (qty === 1) {
      dispatch(removeFromCart({ id }));
    }
  }} className='w-7 h-7 flex items-center justify-center border border-gray-700 text-gray-700 hover:text-white hover:bg-green-500 hover:border-green-500 rounded-md text-sm cursor-pointer transition'>−</span>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Itemcard
