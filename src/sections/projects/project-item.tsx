import React, { FC } from "react";
import { Brackets } from "../../components/brackets";

import { ProjectItemProps } from "./projects.interface";

export const ProjectItem: FC<ProjectItemProps & { index: number }> = ({
  index,
  name,
  link,
  technologies,
  source,
}) => (
  <li>
    {index}.
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {name}
    </a>
    ........
    <Brackets>
      {technologies.map((x) => (
        <span key={x}>{x}</span>
      ))}
    </Brackets>
    {source && (
      <Brackets>
        <a target="_blank" rel="noopener noreferrer" href={source}>
          git_source
        </a>
      </Brackets>
    )}
  </li>
);
