import React, { FC, ReactNode } from "react";

import s from "../App.module.css";

interface BracketsProps {
  children?: ReactNode;
}

export const Brackets: FC<BracketsProps> = ({ children }) => (
  <div className="brackets">[{children}]</div>
);
