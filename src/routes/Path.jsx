import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MealsByCategory from '../pages/MealsByCategory'
import MealsByArea from '../pages/MealsByArea'
import MealDetails from '../pages/MealDetails'
import MealsBySearch from '../pages/MealsBySearch'


const Path = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:category' element={<MealsByCategory/>}/>
      <Route path='/area/:area' element={<MealsByArea/>}/>
      <Route path='/meal/:id' element={<MealDetails/>}/>
      <Route path='/search/:name' element={<MealsBySearch/>}/>
    </Routes>
  )
}

export default Path
