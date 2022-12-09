import { FC } from "react";
import { useNavigate } from "react-router-dom";

import cls from "./sidebar.module.scss";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const navigate = useNavigate();
  function handler(nav: string) {
    navigate(`filter/${nav}`);
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.btns}>
        <button className={cls.btn} onClick={() => handler("Africa")}>
          Africa
        </button>
        <button className={cls.btn} onClick={() => handler("Americas")}>
          Americas
        </button>
        <button className={cls.btn} onClick={() => handler("Asia")}>
          Asia
        </button>
        <button className={cls.btn} onClick={() => handler("Europe")}>
          Europe
        </button>
        <button className={cls.btn} onClick={() => navigate("/")}>
          All Countries
        </button>
      </div>
    </div>
  );
};

export default SideBar;
