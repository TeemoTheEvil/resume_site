import React, { FC, ReactNode } from "react";

import s from "../App.module.css";

interface ContentBlockProps {
  children?: ReactNode;
}

export const ContentBlock: FC<ContentBlockProps> = ({ children }) => (
  <div className={s.contentBlock}>{children}</div>
);
