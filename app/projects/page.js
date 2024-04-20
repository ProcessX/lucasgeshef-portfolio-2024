import ProjectCard from "@/components/projectCard/ProjectCard";
import React from "react";

function Projects() {
  return (
    <main className="">
      <section className="laptop:fixed laptop:top-0 mb-[80px]">
        <div className="containerRaw">
          <div className="pt-[160px] tablet:pt-[192px]">
            <h1 className="c-font-4xl">Projects</h1>
            <p className="c-font-lg">
              XX <span className="opacity-50">so far</span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="containerRaw">
          <ul className="laptop:grid laptop:grid-cols-12">
            <li className="col-span-6 col-start-7 mb-12 last:">
              <ProjectCard />
            </li>
            <li className="col-span-6 col-start-7 mb-12 ">
              <ProjectCard />
            </li>
            <li className="col-span-6 col-start-7 mb-12 ">
              <ProjectCard />
            </li>
            <li className="col-span-6 col-start-7 mb-12 ">
              <ProjectCard />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Projects;
