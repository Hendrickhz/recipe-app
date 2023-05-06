import React from 'react'
import { Badge } from '@mantine/core';
import { Link } from 'react-router-dom';

const MealCategoryArea = ({category, area}) => {
  return (
    <div className=' my-3 flex gap-10'>
     <Link to={`/category/${category}`}>   <Badge color="orange" size="lg" radius="md">{category}</Badge></Link>
      <Link to={`/area/${area}`}><Badge color="teal" size="lg" radius="md">{area}</Badge></Link>
      
    </div>
  )
}

export default MealCategoryArea
