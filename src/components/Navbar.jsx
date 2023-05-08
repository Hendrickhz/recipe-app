import {  TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Categories from "./Categories";
import Areas from "./Areas";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { GoSearch } from 'react-icons/go'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  
  const searchFormHandler = (e) => {
    e.preventDefault();
    if (search !== null && search.trim() !== "") {
      nav(`/search/${search}`);
      setSearch("");
      setNavbarOpen(false)
    }
  };
  return (
    <div>
      <nav className="  bg-white  px-2 py-5 ">
        <div className="w-[90%] mx-auto md:w-[80%]">
          <div className="  container mx-auto flex flex-wrap ">
            <div className="w-full flex gap-8 items-center justify-between  ">
              <Link to={"/"} className="flex items-center">
                <img src="\recipe.png" className="h-8 mr-3" alt="App Logo" />
                <span className=" text-xl lg:text-2xl font-semibold ">
                  Flavour Fiesta
                </span>
              </Link>
              <button
                className="  text-xl leading-none px-3 py-1   rounded  block md:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <GrClose /> : <FiMenu />}
              </button>
              <div className="relative md:inline hidden md:mt-0 mt-4 w-56 lg:w-96 ">
                <form onSubmit={searchFormHandler}>
                  <TextInput
                     icon={<GoSearch/>}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    id="search-navbar"
                    placeholder="Search recipes..."
                    value={search}
                  />
                </form>
              </div>
            </div>
            <div
              className={
                "md::hidden flex-grow items-center duration-300 " +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col  md:w-[80%] w-[90%] mx-auto list-none gap-2">
                <li className="nav-item ">
                  <div className="relative md:mt-0 mt-4  w-full">
                  <form onSubmit={searchFormHandler}>
                      <TextInput
                      icon={<GoSearch/>}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        id="search-navbar"
                        placeholder="Search recipes..."
                        value={search}
                      />
                    </form>
                  </div>
                </li>
                <li className="nav-item ">
                  <Categories navOpen={navbarOpen} setNavOpen={setNavbarOpen} />
                </li>
                <li className="nav-item">
                  <Areas navOpen={navbarOpen} setNavOpen={setNavbarOpen} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

