import React, { useEffect, useState } from 'react';
import foodData from '../assets/foodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';
import { BiCategory } from 'react-icons/bi';

const Category = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(foodData.map((food) => food.category))];
    setCategories(uniqueCategories);
    
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);
  const dispatch= useDispatch();
  const selectedCategory=useSelector((state)=>state.category.category)





  return (
    <div>
      <h3 className='text-xl font-semibold mx-8 my-4 text-gray-600'>Find the best food </h3>
      <div className='flex gap-3 mx-8 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
      <button onClick={()=>dispatch(setCategory("All"))
            
          } 
          
        className={`px-3 py-2 bg-gray-200 font-bold rounded-lg text-black hover:bg-green-500 hover:text-white ${selectedCategory==="All"&& "bg-green-500 text-white"}`}>All</button>
       
        {categories.map((category,index)=>{
          return(
            <button onClick={()=>dispatch(setCategory(category))
            
            } 
            
            key={index}className={`px-3 py-2 bg-gray-200 font-bold rounded-lg text-black hover:bg-green-500 hover:text-white ${selectedCategory===category && "bg-green-500 text-white"}`}>{category}</button>

          )
        })}
        
      </div>
    </div>
  )
}

export default Category
