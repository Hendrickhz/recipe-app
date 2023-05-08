import React from "react";
import Path from "./routes/Path";
import Categories from "./components/Categories";
import Areas from "./components/Areas";

import Navnav from "./components/Navnav"
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className=" bg-gray-50">
      {/* <Navbar /> */}
    
      <Navnav/>
      
      <div className="w-[90%] md:w-[80%] mx-auto py-4 md:flex  hidden  ">
        <Categories />
        <Areas />
      </div>

      <Path />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default App;
