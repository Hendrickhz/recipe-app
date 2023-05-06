import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import MealCard from './MealCard';

const MealSplider = ({meals}) => {
    const [perPage, setPerPage] = useState(4);
    useEffect(() => {
      function updatePerPage() {
        if (window.innerWidth >= 992) {
          setPerPage(4);
        } else if (window.innerWidth >= 768) {
          setPerPage(3);
        } else {
          setPerPage(2);
        }
      }
      
      updatePerPage();
      
      window.addEventListener('resize', updatePerPage);
      return () => window.removeEventListener('resize', updatePerPage);
    }, []);
  return (
    <Splide className='my-3'   options={ {
        rewind: true,
        gap   : '0.5rem',
        perPage: perPage,
        pagination:false,
        drag: "free",
        snap :true,
        pause : false,
        autoplay : true,
        speed:  500,
         arrows: false
      } } >
      {meals?.map(meal=>{
        return <SplideSlide key={meal.idMeal}>
          <MealCard mealData={meal} />
        </SplideSlide>
      })}
    </Splide>
  )
}

export default MealSplider
