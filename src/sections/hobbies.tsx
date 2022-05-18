import React, { FC } from "react";
import { SidebarBlocks } from "../components/sidebar-blocks";

import s from "../App.module.css";
import { ListItem } from "../components/list-item";

const data = [
  "Gaming",
  "Cooking",
  "Reading",
  "Learning new technologies for current goal",
  "Watching movies and series",
  "Swimming",
];

export const Hobbies: FC = () => (
  <SidebarBlocks>
    <h3>Hobbies</h3>
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
