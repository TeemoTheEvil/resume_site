import React, { FC } from "react";
import { ListItem } from "../../components/list-item";

import { ExperienceItemProps } from "./experience.interface";

import s from "../../App.module.css";

export const ExperienceItem: FC<ExperienceItemProps> = ({
  name,
  place,
  dates,
  responsibles,
}) => (
  <div>
    <h4>
      {name} <span className={s.place}>{place}</span>
    </h4>
    <p>{dates}</p>
    <ul>
      {responsibles.map((x) => (
        <ListItem className={s.black} key={x}>
          {x}
        </ListItem>
      ))}
    </ul>
  </div>
);
