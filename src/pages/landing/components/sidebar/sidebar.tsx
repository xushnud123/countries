import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Region } from "./components";

import cls from "./sidebar.module.scss";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const navigate = useNavigate();
  function handler(nav: string) {
    navigate(`filter/${nav}`);
  }

  return (
    <div className={cls.wrapper}>
      <Region />
    </div>
  );
};

export default SideBar;
