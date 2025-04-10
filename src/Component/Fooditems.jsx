import React from 'react'
import foodData from '../assets/foodData'
import FoodCard from './FoodCard'
import { useSelector } from 'react-redux'

const Fooditems = () => {
    const category= useSelector((state)=>state.category.category)
    const search=useSelector((state)=>state.search.search)
    return (
        <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
            {
                foodData.filter((food)=>{
                    if (category === "All") return food.name.toLowerCase().includes(search.toLowerCase());
                    return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
                }).map((food)=>(
                    
                    <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
        />)

                )
            }
   
   </div>
)
  
  
}

export default Fooditems
