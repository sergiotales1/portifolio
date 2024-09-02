import React from "react";
import sobreImg from "../assets/sobre-img.jpg";

const Sobre = () => {
  return (
    <section className=" px-4 xl:px-8 shadow-lg leading-7 pb-8  rounded-lg">
      <article>
        <h2
          id="sobre"
          className="text-center text-2xl xl:text-3xl my-10    font-bold leading-8 text-gray-700 "
        >
          Sobre
        </h2>
      </article>
      <article className="bg-indigo-100 xl:grid xl:w-10/12 xl:grid-cols-[1fr_500px] gap-10 xl:gap-10 items-start justify-center  text-gray-700   p-4   shadow-lg mx-auto ">
        <div className="text-md flex flex-col gap-6">
          <p>
            Sou um desenvolvedor Full Stack e amante da tecnologia que após
            vários anos de experiência no setor do varejo (vendas) decidiu
            finalmente entrar profissionalmente no campo da TI.
          </p>
          <p>
            Comecei meus estudos com HTML5, CSS3 e JavaScript com a proposta
            inicial de montar um site para a empresa em que eu estava no
            momento, após concluir essa missão eu tomei gosto por conhecer
            melhor minhas ferramentas e passei a me aprofundar no campo do front
            end, foi aí que conheci ReactJS, SASS e TailwindCSS, tecnologias que
            elevaram o nível da minha produtividade, além claro das noções em
            Figma para criar os designs dos meus sites e Git para manter os meus
            projetos propriamente versionados.
          </p>
          <p>
            Com o tempo, eu senti a necessidade de explorar o back end das
            minhas aplicações para criar mais possibilidades. Utilizando o
            NodeJS, e com a facilidade em criar rotas que o ExpressJS me
            oferece, sou capaz de criar Restful APIs que conectam o front end
            das minhas aplicações com o servidor e o banco de dados de minha
            preferência.
            <p>Algumas outras tecnologias em que possuo conhecimento:</p>
          </p>
          <ul>
            <li>- Java </li>
            <li>- JSP (Java Server Pages)</li>
            <li>- Python </li>
            <li>- Pandas lib</li>
            <li>- SQLite </li>
            <li>- SQL</li>
            <li>- MongoDB</li>
          </ul>
        </div>
        <div className="bg-indigo-100  hidden xl:block xl:max-w-xl xl:h-full">
          <img
            src={sobreImg}
            className="w-full object-cover  rounded-lg h-full"
            alt="progamming"
          />
        </div>
      </article>
    </section>
  );
};

export default Sobre;
