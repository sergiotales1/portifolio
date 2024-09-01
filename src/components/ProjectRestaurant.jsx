import React, { useState } from "react";
import videoImg from "../assets/restaurant-img-video.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import SingleIcon from "./SingleIcon.jsx";
import { icons } from "../data.js";
import Modal from "./Modal.jsx";
import video from "../assets/restaurant-video.mp4";

const ProjectRestaurant = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleImgClick = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="bg-indigo-100 xl:grid xl:w-10/12 xl:grid-cols-[auto_1fr] gap-10 xl:gap-6 items-center justify-center  text-gray-700   p-4 shadow-lg rounded-lg">
      {open && <Modal open={open} setOpen={setOpen} video={video} />}
      <div onClick={handleImgClick} className="xl:max-w-xl  cursor-pointer">
        <img src={videoImg} className="h-full object-contain" alt="" />
      </div>
      <div>
        <h1 className="text-2xl xl:text-3xl font-semibold pt-2">
          The Restaurant
        </h1>
        <p className="italic text-xl xl:text-2xl pb-4">Full Stack</p>
        <p className="text-lg pb-4">
          The restaurant é uma aplicação web que permite o usuário acessar o
          menu, ver informações sobre um restaurante e até mesmo reservar mesas
          online.
        </p>
        <div className="grid xl:flex xl:gap-8 xl:items-center">
          <button
            className="row-start-2  flex justify-start items-center py-4 text-2xl"
            onClick={handleClick}
          >
            Ver mais <IoMdArrowDropdown />
          </button>
          <div className="flex gap-4">
            <button className="bg-white p-2 rounded-md text-lg font-semibold  hover:text-indigo-500 duration-200 transition-all  xl:text-2xl">
              <a
                className="flex  justify-center items-center gap-1"
                href="https://github.com/sergiotales1/therestaurant"
                target="_blank"
              >
                <AiFillGithub />
                Github
              </a>
            </button>
            <button className="bg-white p-2 rounded-md text-lg font-semibold  hover:text-indigo-500 duration-200 transition-all  xl:text-2xl">
              <a
                className="flex justify-center items-center gap-1"
                href="https://br-restaurant.netlify.app/"
                target="_blank"
              >
                <TbWorldWww />
                Deploy
              </a>
            </button>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="border-t-2 border-gray-300 col-span-full">
          <h1 className="text-2xl font-semibold py-2">
            Tecnologias utilizadas:
          </h1>
          <div className="xl:grid grid-cols-3">
            {icons.map((icon) => {
              return <SingleIcon key={icon.title} {...icon} />;
            })}
          </div>
        </div>
      )}
    </article>
  );
};

export default ProjectRestaurant;
