import React from "react";

import { FaEye } from "react-icons/fa";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";

import "./css/mealCard.css";
const MealCard = ({ mealData }) => {
  return (
    <div className="   relative flex flex-col items-center">
      <div className=" relative parent" >
        <LazyLoadImage
          effect="blur"
          className="img w-[250px] mx-auto rounded"
          src={mealData.strMealThumb}
          alt="img-blur-shadow"
        />
        <Link to={`/meal/${mealData.idMeal}`}>
          
          <FaEye className="  text-black child absolute top-[45%] left-[45%] text-2xl" />
      
        </Link>
      </div>
      <Link to={`/meal/${mealData.idMeal}`}>
        <p className="mt-2 text-center font-semibold ">{mealData.strMeal}</p>
      </Link>
    </div>
  );
};

export default MealCard;
