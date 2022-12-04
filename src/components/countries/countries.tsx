import useRestApi from "hooks/useRestApi";
import { FC } from "react";
import cls from "./countries.module.scss";

interface CountriesProps {}

const Countries: FC<CountriesProps> = () => {
  const { data, isLoading } = useRestApi();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  return (
    <div className={cls.wrapper}>
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
  );
};

export default Countries;
