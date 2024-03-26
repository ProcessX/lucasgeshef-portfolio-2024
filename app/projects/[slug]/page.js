import React from "react";
import Head from 'next/head'

function ProjectDetail() {
  return (
    <main>
      <Head>
        <title>slug | Lucas Geshef</title>
      </Head>
      <section>
        <div className="containerRaw pt-[160px] tablet:[192px]">
          <h1 className="c-font-4xl">Project title</h1>
          <div>
            <p>20XX</p>
            <p>Category</p>
          </div>
        </div>
        <div className="containerRaw">
          <p>project banner</p>
        </div>
      </section>

      <section>
        <div className="containerRaw">
          <ul>
            <li>
              <p>Technology list</p>
            </li>
          </ul>
          <p className="c-font-lg">Project description</p>
          <ul>
            <li>
              <p>Buttons</p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="containerRaw">
          <ul>
            <li>
              <p>Project gallery</p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="containerRaw">
          <p>Project case study</p>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
