import ProjectCard from "@/components/projectCard/ProjectCard";
import React from "react";

function Projects() {
  return (
    <main className="">
      <section className="laptop:fixed laptop:top-0 ">
        <div className="containerRaw">
          <div className="pt-[160px] tablet:pt-[192px]">
            <h1 className="c-font-4xl">Projects</h1>
            <p className="c-font-lg">
              <span>XX</span> so far
            </p>
          </div>
          <ul>
            <li>
              <p>Project card</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="containerRaw">
          <ul className="laptop:grid laptop:grid-cols-12">
            <li className="col-span-6 col-start-7">
              <ProjectCard />
            </li>
            <li className="col-span-6 col-start-7">
              <ProjectCard />
            </li>
            <li className="col-span-6 col-start-7">
              <ProjectCard />
            </li>
            <li className="col-span-6 col-start-7">
              <ProjectCard />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Projects;
