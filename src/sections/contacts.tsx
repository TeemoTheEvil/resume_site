import React, { FC } from "react";
import { SidebarBlocks } from "../components/sidebar-blocks";

import s from "../App.module.css";

export const Contacts: FC = () => (
  <SidebarBlocks>
    <h3>Contacts</h3>
    <div>
      <p>
        <strong>C: </strong>
        <a
          target={"_blank"}
          className={s.link}
          rel="noreferrer noopener"
          href="tel:+380983694370"
        >
          +380983694370
        </a>
      </p>
      <p>
        <strong>E: </strong>
        <a
          target={"_blank"}
          className={s.link}
          rel="noreferrer noopener"
          href="mailto:vitaliy.kondrenko@gmail.com"
        >
          vitaliy.kondrenko@gmail.com
        </a>
      </p>
      <p>
        <strong>SM:</strong>
        <a
          target={"_blank"}
          className={s.link}
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/vitalii-kondrenko-436047181/"
        >
          LinkedIn,
        </a>
        <a
          target={"_blank"}
          className={s.link}
          rel="noreferrer noopener"
          href="https://t.me/True_Teemo"
        >
          Telegram
        </a>
      </p>
    </div>
  </SidebarBlocks>
);
