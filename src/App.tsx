import React, { FC } from "react";
import s from "./App.module.css";
import { About } from "./sections/about";
import { Projects } from "./sections/projects/projects";

const App: FC = () => (
  <div className={s.main}>
    <About />
    <Projects />
  </div>
);

export default App;
