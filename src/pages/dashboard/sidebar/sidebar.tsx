import { FC } from "react";
import { Region } from "./components";
import { REGION, SUBREGION } from "constant/countries";

import cls from "./sidebar.module.scss";
import Search from "./components/search/search";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Search in different directions</h1>
      <div className={cls.container}>
        <Region name='region' data={REGION} />
        <Region name='subregion' data={SUBREGION} />
        <Search
          name='name'
        />
        <Search
          name='capital'
          information='Please try to be more specific to help the search'
        />
        <Search name='lang' keyName='language' />
        <Search name='currency' />
      </div>
    </div>
  );
};

export default SideBar;
