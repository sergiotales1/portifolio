import React from "react";
import ProjectRestaurant from "./ProjectRestaurant";
import ProjectJanePet from "./ProjectJanePet";

const Projects = () => {
  return (
    <section className="px-4 py-4 xl:py-12" id="projetos">
      <article className="flex items-center justify-center flex-col gap-16">
        <h2 className="text-center text-2xl xl:text-3xl  font-bold leading-8 text-gray-700 ">
          Projetos
        </h2>
        <ProjectRestaurant />
        <ProjectJanePet />
      </article>
    </section>
  );
};

export default Projects;
