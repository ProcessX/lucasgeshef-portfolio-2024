import React from "react";
import Head from 'next/head'
import Button from "@/components/button/Button";

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
          <div className="laptop:grid laptop:grid-cols-12">
            <ul className="laptop:col-span-10 laptop:col-start-3">
              <li>
                <p>Technology list</p>
              </li>
            </ul>
            <div className="laptop:col-span-10 laptop:col-start-3">
              <p className="c-font-lg">Lorem ipsum dolor sit amet consectetur. Ut egestas adipiscing bibendum ac sem. Neque in duis pharetra nibh dictum elementum. Mauris quam eros aenean sapien nibh. Massa auctor pellentesque consectetur pretium ridiculus.</p>
            </div>
            <ul className="flex mt-[80px] laptop:col-span-10 laptop:col-start-3">
              <li className="mr-8">
                <Button label="See website" />
              </li>
              <li>
                <Button label="See design" type="outline" />
              </li>
            </ul>
          </div>
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
