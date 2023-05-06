import axios from "axios";
import React, { useEffect, useState } from "react";
import MealTitle from "./MealTitle";
import MealCategoryArea from "./MealCategoryArea";
import MealImage from "./MealImage";
import { Button } from "@mantine/core";
import { TiInfoLarge} from 'react-icons/ti'
import { useNavigate } from "react-router-dom";


const RandomMeal = ({randomMeal}) => {
  // const [randomMeal,setRandomMeal]= useState({});
  // const [loading, setLoadingMeal] = useState(true);
 
  const nav= useNavigate()
  const detailBtnHandler= (id)=>{
    nav(`/meal/${id}`)
  }
 

  

  return (
    
      <div className=" flex flex-wrap md:flex-nowrap items-center w-[100%] mx-auto  ">
        <div className="md:w-[45%]"> 
          <MealImage src={randomMeal.strMealThumb}/>
               </div>
        <div className="md:w-[45%]">
          <MealTitle title={randomMeal.strMeal}/>
          <MealCategoryArea category={randomMeal.strCategory} area={randomMeal.strArea}/>
          <p className=" my-4 text-gray-600 tracking-wide">{randomMeal.strInstructions.substr(0,250)}...</p>
    
          <Button onClick={()=>detailBtnHandler(randomMeal.idMeal)} leftIcon={<TiInfoLarge />}  variant="outline" className=" mt-3" color="teal" size="sm" uppercase>Details </Button>
        </div>
      </div>
 
  );
};

export default RandomMeal;
