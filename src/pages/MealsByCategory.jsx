import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../components/MealCard";
import { ScaleLoader } from "react-spinners";
import BackToTopBtn from "../components/BackToTopBtn";

const MealsByCategory = () => {
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const fetchMealsByCategory = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const mealsData = await data.meals;
    setMeals(mealsData);
    setLoading(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(()=>{
    scrollToTop()
  },[])
  useEffect(() => {
    document.title= `Category | ${category}`
  }, [meals]);


  useEffect(() => {
    fetchMealsByCategory();
  }, [category]);
  if (loading) {
    return (
      <div className=" w-full flex justify-center items-center min-h-[85vh]">
        <ScaleLoader color="#707070" />
      </div>
    );
  } else {
    return (
      <div className=" ">
        <div className="w-[80%] mx-auto pb-5 min-h-[60vh]">
          <h1 className="my-5 text-gray-700 font-semibold text-2xl">
            {category} Meals
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
    );
  }
};

export default MealsByCategory;
