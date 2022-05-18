import React, { FC } from "react";

import { ContentBlock } from "../../components/content-block";
import { ExperienceItem } from "./experience-item";
import { EXPERIENCE_DATA } from "./experience.data";

export const Experience: FC = () => (
  <ContentBlock>
    <h3>Work Experience</h3>
    {EXPERIENCE_DATA.map(({ name, dates, place, responsibles }) => (
      <ExperienceItem
        key={name}
        name={name}
        dates={dates}
        responsibles={responsibles}
        place={place}
      />
    ))}
  </ContentBlock>
);
