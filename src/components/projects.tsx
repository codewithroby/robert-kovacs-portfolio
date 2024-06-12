"use client";

import React from "react";
import SectionHeading from "~/components/section-heading";
import { projectsData } from "~/lib/data";
import Project from "~/components/project";
import { useSectionInView } from "~/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section className="mb-28 scroll-mt-28" id="projects" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
