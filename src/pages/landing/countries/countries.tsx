import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { temporaryData } from "constant/countries";

import useRestApi from "modules/countries/hooks/useCountries";

import cls from "./countries.module.scss";

interface CountriesProps {}

const Countries: FC<CountriesProps> = () => {
  const { data, isLoading } = useRestApi();

  if (isLoading) {
    return (
      <div className={cls.wrapper}>
        <div className={cls.allCard}>
          {temporaryData?.map((item: number) => (
            <div className={cls.cards} key={item}>
              <Skeleton className={cls.card} width='100%' height='100%' />
              <Skeleton className={cls.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.allCard}>
        {data?.map((item: any, index: number) => (
          <div className={cls.cards} key={index}>
            <div className={cls.card}>
              <img
                className={cls.card}
                src={item?.flags?.svg}
                alt='img not found'
              />
            </div>
            <h5 className={cls.title}>
              {item.altSpellings[1] || item.altSpellings[0]}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
