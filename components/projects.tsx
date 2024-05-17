import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from "@/lib/data";
import Project from "./project"

export default function Projects() {
  return (
    <section className="my-24 w-[48rem]">
      <SectionHeading>Recent works</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}