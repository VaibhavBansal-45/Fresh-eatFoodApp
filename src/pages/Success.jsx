import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Success = () => {
  const [loading, setloading]=useState(true);
  useEffect(()=>{
    console.log("hello")
    setTimeout(()=>{
      setloading(false)
    },2000)
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? (
          <PropagateLoader color="#36d7b7"/>
        ) :( <div>
          <h2 className='text-3xl font-semibold mb-4 text-center'> Order Successful!</h2>
      <p> Your order has been Successfully placed</p></div>
        )
      }
      
    </div>
  )
}

export default Success
