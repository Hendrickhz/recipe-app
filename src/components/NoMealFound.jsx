import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const NoMealFound = () => {
  return (
  
      <div className="flex flex-col items-center md:gap-10  ">
        <p className=' text-gray-700 text-xl font-semibold'>Sorry, we couldn't find any matching meals for your search. Please try again with a different keyword.</p>
         <Link to={'/'}> <Button  variant="outline" className=" mt-3" color="teal" size="sm" uppercase>Go Back To Home Page </Button></Link>
      </div>

  )
}

export default NoMealFound
