import React, { FC } from "react";
import { Brackets } from "../../components/brackets";

import { ContentBlock } from "../../components/content-block";
import { PROJECTS_DATA } from "./projects.data";
import { ProjectItemProps } from "./projects.interface";

export const ProjectItem: FC<ProjectItemProps> = ({
  name,
  link,
  technologies,
  source,
}) => (
  <li>
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {name}
    </a>
    ........
    <Brackets>{technologies.map((x) => x)}</Brackets>
    {source && (
      <Brackets>
        <a target="_blank" rel="noopener noreferrer" href={source}>
          git_source
        </a>
      </Brackets>
    )}
  </li>
);
