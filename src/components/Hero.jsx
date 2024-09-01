import React from "react";
import { AiFillProfile } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import heroImg from "../assets/hero-img.png";
import curriculo from "../assets/curriculo-Sergio-Tales.pdf";

const Hero = () => {
  return (
    <section className="bg-indigo-100 flex justify-center items-center py-4 xl:py-8 px-4">
      <article className="text-center xl:w-3/4 xl:mx-auto">
        <h1 className="text-gray-700 font-bold text-3xl xl:text-6xl">
          Olá, conheça Sergio Tales:
        </h1>
        <p className="text-gray-700 py-4 xl:py-6 font-medium text-lg xl:w-8/12 xl:mx-auto xl:text-2xl">
          Um desenvolvedor web full stack focado no desenvolvimento de
          aplicações únicas com o objetivo de transformar sonhos em realidade.
        </p>
        <div className="w-52 xl:w-64 mx-auto">
          <img src={heroImg} className="w-full" alt="profile img" />
        </div>
        <div className="flex  justify-center items-center gap-6 py-8">
          <button className="bg-indigo-500 p-2 rounded-md text-lg font-semibold text-indigo-50 hover:text-gray-700 duration-200 transition-all xl:text-2xl">
            <a
              className="flex justify-center items-center gap-1"
              href={curriculo}
              download={"curriculo.pdf"}
            >
              <AiFillProfile />
              Currículo
            </a>
          </button>
          <button className="bg-gray-700 p-2 rounded-md text-lg font-semibold text-indigo-50 hover:text-indigo-500 duration-200 transition-all  xl:text-2xl">
            <a
              className="flex  justify-center items-center gap-1"
              href="https://github.com/sergiotales1"
              target="_blank"
            >
              <AiFillGithub />
              Github
            </a>
          </button>
        </div>
        <div className="flex items-center justify-center flex-col">
          <a
            href="#projetos"
            className="flex items-center justify-center flex-col"
          >
            <p className="text-xs xl:text-sm">Arraste para ver mais</p>
            <IoIosArrowDown className="text-2xl" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Hero;
