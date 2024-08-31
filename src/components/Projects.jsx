import React from "react";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="px-4 py-4 xl:py-12">
      <article className="flex items-center justify-center flex-col">
        <h2 className="text-center text-2xl xl:text-3xl  font-bold leading-8 text-gray-700 py-10">
          Projetos
        </h2>
        <SingleProject />
      </article>
    </section>
  );
};

export default Projects;
