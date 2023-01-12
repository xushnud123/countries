import { FC } from "react";
import { Region } from "./components";
import { REGION, SUBREGION } from "constant/countries";

import cls from "./sidebar.module.scss";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <div className={cls.wrapper}>
      <Region name='region' data={REGION} />
      <Region name='subregion' data={SUBREGION} />
    </div>
  );
};

export default SideBar;
