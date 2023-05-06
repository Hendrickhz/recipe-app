import React, { useEffect, useState } from "react";
import RandomMeal from "../components/RandomMeal";
import SeafoodMeals from "../components/SeafoodMeals";
import CanadianMeals from "../components/CanadianMeals";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

const Home = () => {
  const [loadingRandomMeal, setLoadingRandomMeal] = useState(true);
  const [loadingSeafood, setLoadingSeafood] = useState(true);
  const [loadingCanadianMeals, setLoadingCanadianMeals] = useState(true);

  const [randomMeal, setRandomMeal] = useState({});
  const [seaFood, setSeaFood] = useState([]);
  const [canadianMeals, setCanadiansMeals] = useState([]);
  const fetchRandomMeal = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const randomMealData = await data.meals[0];
      setRandomMeal(randomMealData);
      setLoadingRandomMeal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSeafood = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    const mealsArray = await data.meals;
    setSeaFood(mealsArray);
    setLoadingSeafood(false);
  };

  const fetchCanadianMeals = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
    );
    const mealsArray = await data.meals;
    setCanadiansMeals(mealsArray);
    setLoadingCanadianMeals(false);
  };
  useEffect(() => {
    fetchRandomMeal();
    fetchSeafood();
    fetchCanadianMeals();
    document.title="Flavour Fiesta"
  }, []);

  if (!loadingRandomMeal && !loadingSeafood && !loadingCanadianMeals) {
    return (
      <div className=" bg-gray-50">
        <div className="w-[90%] md:w-[80%] mx-auto">
        
          <div className="py-5">
            <RandomMeal randomMeal={randomMeal} />
          </div>
          <div className="">
            <SeafoodMeals meals={seaFood} />
          </div>
          <div className="mb-20">
            <CanadianMeals meals={canadianMeals} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" w-full flex justify-center items-center min-h-[85vh]">
      <ScaleLoader color="#707070" />
    </div>
  );
};

export default Home;
