import React, { FC } from "react";

import s from "../App.module.css";

export const Company: FC = () => (
  <div>
    <h4 className="job_title">
      SCADA-system developer, PLC programming{" "}
      <span className="job_place">Sofievka</span>
    </h4>
    <p className="paragraphs_style">
      November 2017 - March 2019 | Ukraine, Kyiv
    </p>
    <ul className="main_list_style">
      <li className="main_list_dots_style">
        {" "}
        <span className="main_list_text_style">
          Develop FBD logic for PLCs{" "}
        </span>
      </li>
      <li className="main_list_dots_style">
        {" "}
        <span className="main_list_text_style">
          Develop UI and logic for SCADA-systems
        </span>
      </li>
      <li className="main_list_dots_style">
        {" "}
        <span className="main_list_text_style">
          Develop high-loaded projects
        </span>
      </li>
    </ul>
  </div>
);
