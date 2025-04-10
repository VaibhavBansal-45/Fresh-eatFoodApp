import React from 'react'
import foodData from '../assets/foodData'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/Cartslice'

const FoodCard = ({ id, name,price, desc,rating,img}) => {
  const dispatch= useDispatch();
  return (
    <div className='flex flex-col justify-between bg-white p-4 rounded-xl shadow-md w-64 h-auto'>
    
    <img src={img} alt="Onion Pizza" className="h-40 w-full object-fill transition-transform duration-500 ease-in-out hover:scale-105"/>

    <div className='text-sm flex justify-between'>
        
            <h2 className="text-lg">{name}</h2>
            <span className="text-green-600 font-extrabold">₹{price}</span>
        
       
    </div>
    <p className='text-sm font-normal'>{desc.slice(0,70)}...</p>

    
    <div className="flex justify-between items-center mt-3">
    <span className="text-black-500 font-semibold text-sm">⭐ {rating}</span>
    <button
  onClick={() => {
    
    dispatch(addToCart({ id, name, price, rating, qty: 1,img }));
  }}
  className="px-3 py-1 text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm transition"
>
  Add to cart
</button>
  </div>

</div>
  )
}

export default FoodCard
