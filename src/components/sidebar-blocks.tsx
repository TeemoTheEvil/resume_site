import React, { FC, ReactNode } from "react";

import s from "../App.module.css";

interface SidebarBlocksProps {
  children?: ReactNode;
}

export const SidebarBlocks: FC<SidebarBlocksProps> = ({ children }) => (
  <div className={s.sidebarBlocks}>{children}</div>
);
