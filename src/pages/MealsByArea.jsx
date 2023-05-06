import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MealCard from '../components/MealCard';
import { ScaleLoader } from "react-spinners";
import BackToTopBtn from '../components/BackToTopBtn';
const MealsByArea = () => {
  const [loading, setLoading] = useState(true);
    const { area } = useParams();
    const [meals, setMeals] = useState([]);
    const fetchMealsByArea = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const mealsData = await data.meals;
      setMeals(mealsData);
      setLoading(false)
    };
    useEffect(() => {
      document.title= `Area | ${area}`
    }, [meals]);

    useEffect(() => {
        fetchMealsByArea();
    }, [area]);
    if (loading) {
      return (
        <div className=" w-full flex justify-center items-center min-h-[85vh]">
          <ScaleLoader color="#707070" />
        </div>
      );
    } else {
    return (
      <div className=" mb-5">
        <div className="w-[80%] mx-auto pb-5 min-h-[60vh] ">
          <h1 className="my-5 text-gray-700 font-semibold text-2xl">
            {area} Meals
          </h1>
          <div className=" grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3   gap-8">
            {meals?.map((meal) => {
              if (meal.strMealThumb !== null) {
                return <MealCard mealData={meal} key={meal.idMeal} />;
              }
              return null;
            })}
          </div>
          {meals.length>=10 && (<BackToTopBtn/>)}
        </div>
      </div>
    );}
}

export default MealsByArea
