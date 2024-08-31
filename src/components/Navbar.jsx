import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 sticky top-0 z-10">
      <ul className=" flex items-center justify-center  font-semibold p-6 text-xl gap-8 xl:gap-20 xl:text-2xl ">
        <li
          className="transition-all duration-300 hover:text-gray-300
          text-stone-50"
        >
          <a href="#">Home</a>
        </li>
        <li
          className="transition-all duration-300 hover:text-gray-300
          text-stone-50"
        >
          <a href="#projetos">Projetos</a>
        </li>
        <li
          className="transition-all duration-300 hover:text-gray-300
          text-stone-50"
        >
          <a href="#sobre">Sobre</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
