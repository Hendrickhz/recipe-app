import { Select } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Areas = ({navOpen,setNavOpen}) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea]= useState(null)

  const fetchCategory = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );

    const areaArray = await data.meals.map((a) => {
      return {
        value: a.strArea,
        label: a.strArea,
      };
    });

    setAreas(areaArray);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const nav = useNavigate();
  const areaChangeHandler = (value) => {
    if (value !== null) {
      nav(`/area/${value}`);
      setSelectedArea(null)
      if (navOpen) {
        setNavOpen(false);
      }
  
    }
  };
  return (
    <div className=" flex w-full ">
      <Select
      className="md:w-auto w-full"
        label="Available Areas"
        onChange={areaChangeHandler}
        placeholder="Choose an area"
        searchable
        nothingFound="No options"
        transitionProps={{
          transition: "pop-top-left",
          duration: 80,
          timingFunction: "ease",
        }}
        value={selectedArea}
        data={areas}
      />
    </div>
  );
};

export default Areas;
