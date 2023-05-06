import React, { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Categories = ({collapse}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategory = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const categoryArray = await data.categories.map((c) => {
      return {
        value: c.strCategory,
        label: c.strCategory,
      };
    });

    setCategories(categoryArray);
  };
  const nav = useNavigate();
  useEffect(() => {
    fetchCategory();
  }, []);

  const categoryChangeHandler = (value) => {
    if (value !== null) {
      nav(`/category/${value}`);
      setSelectedCategory(null)
      collapse?.collapse();
    }
  };
  return (
    <div className=" flex w-full  gap-32">
      <Select className=" md:w-auto w-full"
        onChange={categoryChangeHandler}
        label="Available Categories"
        placeholder="Choose a category"
        searchable
        nothingFound="No options"
        transitionProps={{
          transition: "pop-top-left",
          duration: 80,
          timingFunction: "ease",
        }}
        value={selectedCategory}
        data={categories}
      />
    </div>
  );
};

export default Categories;
