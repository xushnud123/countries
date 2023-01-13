import { FC } from "react";
import { useParams } from "react-router-dom";

import { useRegion } from "modules/region/hooks/useRegion";

import Countries from "../countries/countries";

import cls from "./filter.module.scss";

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const { regionName = "" } = useParams();
  const { data, isLoading } = useRegion(regionName);


  return (
    <div className={cls.wrapper}>
      <Countries data={data} isLoading={isLoading} />
    </div>
  );
};

export default Filter;
