import React, { FC, ReactNode } from "react";

interface ListItemProps {
  children?: ReactNode;
  className?: string;
}

export const ListItem: FC<ListItemProps> = ({ children, className }) => (
  <li className={className}>
    <div className={["circle orangeBg", className].join(" ")}></div> {children}
  </li>
);
