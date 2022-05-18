import React, { FC } from "react";

import { ContentBlock } from "../components/content-block";

import s from "../App.module.css";

export const Education: FC = () => (
  <ContentBlock>
    <h3>Education</h3>
    <h4 className="orange">
      {`National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"`}
    </h4>
    <h4>
      Automation and computer-integrated technologies |{" "}
      <span className={s.place}>Master</span>{" "}
    </h4>
    <p className="paragraphs_style">
      September 2013 - December 2018 | Ukraine, Kyiv
    </p>
  </ContentBlock>
);
