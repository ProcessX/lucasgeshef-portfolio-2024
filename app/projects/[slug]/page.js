import React from "react";
import Head from 'next/head'
import Button from "@/components/button/Button";
import TechnologyChip from "@/components/technologyChip/TechnologyChip";

function ProjectDetail() {
  return (
    <main>
      <Head>
        <title>slug | Lucas Geshef</title>
      </Head>
      <section className="pb-[160px]">
        <div className="containerRaw">
          <div className="pt-[160px] tablet:[192px] mb-8 laptop:grid laptop:grid-cols-12">
            <h1 className="c-font-4xl laptop:col-span-9">Project title</h1>
            <div className="laptop:col-span-3 laptop:flex laptop:justify-between laptop:items-end laptop:mb-5">
              <p>20XX</p>
              <p>Category</p>
            </div>
          </div>
          <div className="containerRaw h-[320px] tablet:h-[400px] bg-dark-700 rounded-lg">
            <p>project banner</p>
          </div>
        </div>
      </section>

      <section>
        <div className="containerRaw">
          <div className="laptop:grid laptop:grid-cols-12">
            <ul className="laptop:col-span-10 laptop:col-start-2 desktop:col-start-3 desktop:col-span-8 mb-8">
              <li className="inline-block mr-2">
                <TechnologyChip label="Unity" />
              </li>
              <li className="inline-block mr-2">
                <TechnologyChip label="react" />
              </li>
              <li className="inline-block">
                <TechnologyChip label="wordpress" />
              </li>
            </ul>
            <div className="laptop:col-span-10 laptop:col-start-2 desktop:col-start-3 desktop:col-span-8">
              <p className="c-font-lg">Lorem ipsum dolor sit amet consectetur. Ut egestas adipiscing bibendum ac sem. Neque in duis pharetra nibh dictum elementum. Mauris quam eros aenean sapien nibh. Massa auctor pellentesque consectetur pretium ridiculus.</p>
            </div>
            <ul className="flex mt-[80px] laptop:col-span-10 laptop:col-start-2 desktop:col-start-3 desktop:col-span-8">
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
