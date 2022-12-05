import React, { FC } from "react";
import { Loader } from "components";

import useRestApi from "modules/countries/hooks/useCountries";

import cls from "./countries.module.scss";

interface CountriesProps {}

const Countries: FC<CountriesProps> = () => {
  const { data, isLoading } = useRestApi();
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={cls.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cls.allCard}>
          {data?.map((item: any, index: number) => (
            <div className={cls.cards} key={index}>
              <img
                className={cls.card}
                src={item?.flags?.svg}
                alt='img not found'
              />
              <h5>{item.altSpellings[1] || item.altSpellings[0]}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
