import React from 'react'
import Itemcard from './Itemcard'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';


const Cart = () => {
  const [activeCard, setActiveCart]=useState(false);
  const cartItems=useSelector((state)=>state.cart.cart);
  const navigate=useNavigate();
  const totalqty=cartItems.reduce((totalqty,item)=>totalqty+ item.qty ,0)
  const price=cartItems.reduce((total,item)=>total+ item.qty*item.price ,0)
  
  return (
    <>
    <div className={`h-full w-full fixed right-0 top-0 lg:w-[20vw] p-5 bg-white ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-10 `}>
        <div className='flex justify-between items-center my-3'>
            <h2 className='text-xl font-bold text-gray-800'>My order</h2>
            <button onClick={()=>setActiveCart(!activeCard)} className='w-7 h-7 flex items-center justify-center border border-gray-300 text-red-700 hover:text-red-800  hover:border-red-500 rounded-md text-xl cursor-pointer transition '>⨯</button>
        </div>
        {
         cartItems.length>0? cartItems.map((food)=>{
            return(
              <Itemcard key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}/>
            )
          }): <h2 className='text-center text-xl font-bold text-gray-700'> Your Cart is empty</h2>
        }
        
        

        

       
        <div className='absolute bottom-0'>
            <h3 className='font-bold text-gray-700 '>Items : <span className='text-green-500'>{totalqty}</span> </h3>
            <h3 className='font-bold text-gray-700'>Total Amount : <span className='text-green-500'>₹{price} </span></h3><hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button  onClick={()=>navigate("/success")}className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'> CheckOut </button>
        </div>
        

    </div>
    <div className="fixed bottom-8 right-4 z-20">
        <div className="relative">
          <FaShoppingCart
            onClick={() => setActiveCart(!activeCard)}
            className={`bg-white rounded-full shadow-xl p-4 text-5xl cursor-pointer hover:text-green-500 transition ${
              totalqty > 0 && "animate-bounce"
            }`}
          />
          {totalqty > 0 && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
              {totalqty}
            </span>
          )}
        </div>
      </div>

    
   
    </>
  )
}

export default Cart
