import { FC } from "react";

import cls from "./sidebar.module.scss";

interface SideBarProps {
  setState: (e: string) => void;
}

const SideBar: FC<SideBarProps> = ({ setState }) => {
  function handler(params: string) {
    setState(params);
  }
  return (
    <div className={cls.wrapper} onClick={() => handler("Africa")}>
      Hello
    </div>
  );
};

export default SideBar;
