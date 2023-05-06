import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../components/MealCard";
import { ScaleLoader } from "react-spinners";
import BackToTopBtn from "../components/BackToTopBtn";
import NoMealFound from "../components/NoMealFound";
const MealsBySearch = () => {
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  const [searchMeals, setSearchMeals] = useState([]);
  const fetchSearchMeals = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    setSearchMeals(data.meals);
    setLoading(false);
  };
  useEffect(() => {
    fetchSearchMeals();
  }, [name]);
  if (loading) {
    return (
      <div className=" w-full flex justify-center items-center min-h-[85vh]">
        <ScaleLoader color="#707070" />
      </div>
    );
  } else if (searchMeals == null) {
    return (
      <div className="lg:mb-32 mb-52 w-[90%] mx-auto md:w-[80%] flex justify-center items-center min-h-[70vh]">
        <NoMealFound/>
      </div>
    );
  } else {
    return (
      <div>
        <div className=" w-[90%] md:w-[80%] mx-auto min-h-[85vh]">
          <h1 className="my-4 font-semibold">Search Keyword: {name}</h1>
          <div className="mb-5 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {searchMeals?.map((meal) => {
              return <MealCard mealData={meal} key={meal.idMeal} />;
            })}
          </div>
          {searchMeals.length >= 10 && <BackToTopBtn />}
        </div>
      </div>
    );
  }
};

export default MealsBySearch;
