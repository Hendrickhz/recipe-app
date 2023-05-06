
import React from 'react'
import MealSplider from './MealSplider';

const SeafoodMeals = ({meals}) => {
    
  return (
    <div className="">
        <h1 className='mb-4 text-gray-800 font-semibold text-xl'>Seafood Dishes</h1>
        <MealSplider meals={meals}/>
    </div>
  )
}

export default SeafoodMeals
