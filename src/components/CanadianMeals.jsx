
import React from 'react'
import MealSplider from './MealSplider';

const CanadianMeals = ({meals}) => {
  
    
  return (
    <div className="">
        <h1 className='mb-4 text-gray-800 font-semibold text-xl'>Canadian Dishes</h1>
        <MealSplider meals={meals}/>
    </div>
  )
}

export default CanadianMeals
