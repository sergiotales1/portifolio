import React, { useState } from "react";
import videoImg from "../assets/janepet-img-video.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import SingleIcon from "./SingleIcon.jsx";
import { iconsJane } from "../data.js";

import video from "../assets/janepet-video.mp4";
import Modal from "./Modal.jsx";

const ProjectJanePet = () => {
  const [expanded, setExpanded] = useState(false);

  const [open, setOpen] = useState(false);

  const handleImgClick = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <article className="bg-indigo-100 xl:grid xl:w-10/12 xl:grid-cols-[auto_1fr] gap-10 xl:gap-6 items-center justify-center  text-gray-700   p-4 shadow-lg rounded-lg mt-10">
      {open && <Modal open={open} setOpen={setOpen} video={video} />}
      <div onClick={handleImgClick} className="xl:max-w-xl cursor-pointer">
        <img src={videoImg} className="h-full object-contain" alt="" />
      </div>
      <div>
        <h1 className="text-2xl xl:text-3xl font-semibold pt-2">Jane Pet</h1>
        <p className="italic text-xl xl:text-2xl pb-4">Front End</p>
        <p className="text-lg pb-4">
          Uma landing page moderna e responsiva para um pet shop, com o objetivo
          de promover alguns serviços oferecidos e proporcionar uma experiência
          agradável aos usuários. A página foi desenvolvida com foco na
          usabilidade e na conversão.
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
                className="flex justify-center items-center gap-1"
                href="https://janepet.vercel.app/"
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
            {iconsJane.map((icon) => {
              return <SingleIcon key={icon.title} {...icon} />;
            })}
          </div>
          <p className="text-sm pt-3 xl:text-md">
            *A divulgação deste site foi permitida pelo cliente deste serviço
          </p>
        </div>
      )}
    </article>
  );
};

export default ProjectJanePet;
