import React from "react";

const MealImage = ({ src }) => {
  return <img className=" md:w-[80%] mx-auto border rounded shadow-sm" src={src} alt="" />;
};

export default MealImage;
