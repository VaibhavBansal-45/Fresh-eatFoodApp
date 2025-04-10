import React from 'react'
import Navbar from '../Component/Navbar'
import Category from '../Component/Category'

import Fooditems from '../Component/Fooditems'
import Cart from '../Component/Cart'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    <Fooditems/>
    <Cart/>
    </>
  )
}

export default Home
