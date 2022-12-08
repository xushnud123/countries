import { FC } from "react";

import cls from "./sidebar.module.scss";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return <div className={cls.wrapper}>Hello</div>;
};

export default SideBar;
