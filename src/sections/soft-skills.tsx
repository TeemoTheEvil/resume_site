import React, { FC } from "react";
import { SidebarBlocks } from "../components/sidebar-blocks";

import s from "../App.module.css";
import { ListItem } from "../components/list-item";

const data = [
  "Analytical thinking",
  "Logical thinking",
  "Integrity",
  "Multitasking",
  "Fast learner",
  "Collaboration",
];

export const SoftSkills: FC = () => (
  <SidebarBlocks>
    <h3>Soft Skills</h3>
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
