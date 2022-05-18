import React, { FC } from "react";
import s from "./App.module.css";
import { About } from "./sections/about";
import { Contacts } from "./sections/contacts";
import { Hobbies } from "./sections/hobbies";
import { Languages } from "./sections/languages";
import { Projects } from "./sections/projects/projects";
import { SoftSkills } from "./sections/soft-skills";
import { TechSkills } from "./sections/tech-skills";

import photo from "./assets/sample.jpg";
import { Experience } from "./sections/experience/experience";
import { Education } from "./sections/education";

const App: FC = () => (
  <div className={s.main}>
    <main>
      <About />
      <Projects />
      <Experience />
      <Education />
    </main>
    <aside className={s.sidebar}>
      <img width="370" src={photo} alt="user_main" />
      <Contacts />
      <TechSkills />
      <SoftSkills />
      <Languages />
      <Hobbies />
    </aside>
  </div>
);

export default App;
