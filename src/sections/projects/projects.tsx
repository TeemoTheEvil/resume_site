import React, { FC } from "react";

import { ContentBlock } from "../../components/content-block";
import { ProjectItem } from "./project-item";
import { PROJECTS_DATA } from "./projects.data";

export const Projects: FC = () => (
  <ContentBlock>
    <h3>Projects</h3>
    <ol>
      {PROJECTS_DATA.map(({ name, technologies, source, link }) => (
        <ProjectItem
          key={name}
          name={name}
          technologies={technologies}
          link={link}
          source={source}
        />
      ))}
    </ol>
  </ContentBlock>
);
