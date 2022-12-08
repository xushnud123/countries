import { FC, useContext, useEffect } from "react";
import { CardSkeleton } from "components";
import Card from "./card/card";
import { temporaryData } from "constant/countries";
import GlobalContext from "context/context";
import type * as Types from "modules/countries/types";

import cls from "./countries.module.scss";

interface CountriesProps {}

const Countries: FC<CountriesProps> = () => {
  const { state, setState } = useContext(GlobalContext);


  if (state.isLoading) {
    return (
      <div className={cls.wrapper}>
        <div className={cls.allCard}>
          {temporaryData?.map((item: number) => (
            <CardSkeleton key={item} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.allCard}>
        {state.data?.map((item: Types.CountriesData.Countries, index: number) => (
          <Card
            official={item.name.official}
            svg={item.flags.svg}
            name={item.altSpellings}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
