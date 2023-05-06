import React from "react";
import { BsArrow90DegUp } from "react-icons/bs";

const BackToTopBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <button
      className="flex text-sm py-3 hover:underline  gap-2 items-center"
      onClick={scrollToTop}
    >
      <BsArrow90DegUp /> Back to Top
    </button>
  );
};

export default BackToTopBtn;
