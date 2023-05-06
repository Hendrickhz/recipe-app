import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealImage from "../components/MealImage";
import MealTitle from "../components/MealTitle";
import MealCategoryArea from "../components/MealCategoryArea";
import ReactPlayer from "react-player/youtube";
import { ScaleLoader } from "react-spinners";

const MealDetails = () => {
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState({});
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchMealDetails = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setMeal(data.meals[0]);
    setLoading(false);
  };
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    // assuming no more than 20 ingredients per meal
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (meal[ingredientKey]) {
      // check if ingredient exists
      const ingredient = `${meal[ingredientKey]} - ${meal[measureKey]}`;
      ingredients.push(ingredient);
    }
  }

  useEffect(() => {
    fetchMealDetails();
  }, []);
  if (loading) {
    return (
      <div className=" w-full flex justify-center items-center min-h-[85vh]">
        <ScaleLoader color="#707070" />
      </div>
    );
  } else {
    return (
      <div className=" w-[80%] mx-auto lg:mt-0 mt-4 ">
        <div className=" flex md:flex-nowrap flex-wrap items-center w-[100%]  min-h-[85vh] ">
          <div className="md:w-[45%] mx-auto">
            <MealImage src={meal.strMealThumb} />
          </div>
          <div className="md:w-[45%]">
            <MealTitle title={meal.strMeal} />
            <MealCategoryArea category={meal.strCategory} area={meal.strArea} />
            <div className="flex gap-5 mt-4">
              <button
                onClick={() => setActiveTab("instructions")}
                className="px-2 md:px-4 py-2 md:text-base text-sm  md:py-3 bg-teal-700 text-white font-semibold
             rounded hover:bg-teal-500 duration-300 "
              >
                Instructions
              </button>
              <button
                onClick={() => setActiveTab("ingredients")}
                className="px-2 md:px-4 py-2 md:text-base text-sm  md:py-3 bg-orange-700 text-white font-semibold
             rounded hover:bg-orange-500 duration-300"
              >
                Ingredients
              </button>
            </div>
            <div className="max-h-[300px] overflow-scroll  my-4">
              {activeTab === "instructions" ? (
                <p className=" text-gray-700 tracking-wide text-justify">
                  {meal?.strInstructions}...
                </p>
              ) : (
                <ul className="   ">
                  {ingredients.map((ingredient) => {
                    return (
                      <li className=" text-gray-700 text-lg" key={ingredient}>
                        -{ingredient}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
        {meal.strYoutube && (
          <div className="lg:mt-0 mt-4 mb-8 justify-center flex">
            <ReactPlayer className="" url={meal.strYoutube} />
          </div>
        )}
      </div>
    );
  }
};

export default MealDetails;
