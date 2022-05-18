import React, { FC } from "react";
import { SidebarBlocks } from "../components/sidebar-blocks";

import s from "../App.module.css";
import { ListItem } from "../components/list-item";

const data = [
  "Linux administration",
  "Windows administration",
  "Network administration",
  "Git",
  "Virtualization",
  "Docker",
  "AWS",
  "K8s",
];

export const TechSkills: FC = () => (
  <SidebarBlocks>
    <h3>Tech Skills</h3>
    <div>
      <ul>
        {data.map((x) => (
          <ListItem className={s.techSkill} key={x}>
            {x}
          </ListItem>
        ))}
      </ul>
    </div>
  </SidebarBlocks>
);
